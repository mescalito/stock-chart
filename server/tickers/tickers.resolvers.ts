import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { SchedulerRegistry } from '@nestjs/schedule';
import { PubSub } from 'apollo-server-express';
import { CronJob, CronTime } from 'cron';
import { Observable } from 'rxjs';
import { info } from 'server/library/logger';
import { TickerDto } from './tickers.dto';
import { TickersService } from './tickers.service';

const pubSub = new PubSub();

@Resolver('Ticker')
export class TickersResolver {
  constructor(
    private tickersService: TickersService,
    private scheduler: SchedulerRegistry,
  ) {}

  @Query('tickers')
  ticker(
    @Args('symbol') symbol: string,
    @Args('limit') limit = 100,
  ): Observable<TickerDto[]> {
    try {
      this.scheduler.getCronJob(symbol);
    } catch (error) {
      this.createTickerSub(symbol);
    }
    return this.tickersService.getTickers(symbol, limit);
  }

  @Query('tickerUnsubscribe')
  tickerUnsubscribe(@Args('symbol') symbol: string): boolean {
    try {
      this.scheduler.deleteCronJob(symbol);
    } catch (error) {
      info(`no cron to delete`);
    }
    return true;
  }

  @Subscription('tickerSubscribe')
  tickerSubscribe(): AsyncIterator<unknown, any, undefined> {
    return pubSub.asyncIterator('tickerSubscribe');
  }

  createTickerSub(symbol: string): void {
    const defaultPolling = 10;
    const job = new CronJob(`*/${defaultPolling} * * * * *`, async () => {
      // const [lastValue] = await this.tickersService
      //   .getTickers(symbol)
      //   .toPromise();
      const lastValue = {
        open: 131.32,
        high: 133.46,
        low: 131.1,
        last: 131.97,
        close: 130.96,
        volume: 54930064.0,
        date: '2020-12-25T02:00:00+0000',
        symbol: symbol,
        exchange: 'IEXG',
      };
      pubSub.publish('tickerSubscribe', {
        tickerSubscribe: lastValue,
      });
      // polling algorithm
      // job.setTime(this.pollingTime(lastValue.open, lastValue.last));
    });
    this.scheduler.addCronJob(symbol, job);
    job.start();
  }

  pollingTime(open: number, last: number): CronTime {
    const lowPolling = 15;
    const highPolling = 5;
    const cpt = 3;
    const percent = ((open - last) / open) * 100;
    return new CronTime(
      cpt > percent ? `*/${lowPolling} * * * *` : `*/${highPolling} * * * *`,
    );
  }
}
