import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './environment';
import { join } from 'path';
import { StocksModule } from './stocks/stocks.module';
import { TickersModule } from './tickers/tickers.module';
import { ScheduleModule } from '@nestjs/schedule';

const {
  dbHost: host,
  dbPort: port,
  dbUser: username,
  dbPass: password,
  dbName: database,
  env,
} = config;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      synchronize: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrationsTableName: 'migration',
      migrations: ['server/migration/*.ts'],
      cli: {
        migrationsDir: 'server/migration',
      },
      ssl: env === 'prod',
    }),
    StocksModule,
    TickersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'server/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
