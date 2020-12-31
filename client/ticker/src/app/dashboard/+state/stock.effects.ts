import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import * as stock from './stock.action';
import { WishlistService } from '../../_services/wishlist.service';
import { StockWishlist, Ticker } from '@st/interfaces';
import { TickerService } from '../../_services/ticker.service';

@Injectable()
export class StockEffects {
  LoadWishlist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stock.LoadWishlist),
      mergeMap(() =>
        this.wishlist.getList().pipe(
          map((wishlist: StockWishlist[]) =>
            stock.SuccessLoadWishlist({
              payload: wishlist,
            }),
          ),
        ),
      ),
    ),
  );

  addStock$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stock.AddStock),
      mergeMap(data =>
        this.wishlist
          .addStock(data)
          .pipe(
            switchMap((wishlist: StockWishlist) => [
              stock.SuccessAddStock({ payload: wishlist }),
              stock.AddTicker(data),
            ]),
          ),
      ),
    ),
  );

  removeStock$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stock.RemoveStock),
      mergeMap(data =>
        this.wishlist
          .deleteStock({ id: data.id })
          .pipe(
            switchMap((_deleted: boolean) => [
              stock.SuccessRemoveStock(data),
              stock.UnsubTicker(data),
            ]),
          ),
      ),
    ),
  );

  subTicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stock.SubTicker),
      mergeMap(data =>
        this.ticker
          .tickerSubscribe(data)
          .pipe(
            map((ticker: Ticker) =>
              stock.SuccessSubTicker({ payload: ticker }),
            ),
          ),
      ),
    ),
  );

  unsubTicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stock.UnsubTicker),
      mergeMap(data =>
        this.ticker
          .tickerUnsubscribe({ symbol: data.symbol })
          .pipe(map((_unsubscribed: boolean) => stock.SuccessUnsubTicker())),
      ),
    ),
  );

  addTicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stock.AddTicker),
      mergeMap(data =>
        this.ticker
          .getTicker({ symbol: data.symbol })
          .pipe(
            switchMap((ticker: Ticker[]) => [
              stock.SuccessAddTicker({ payload: ticker }),
              stock.SubTicker(data),
            ]),
          ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private wishlist: WishlistService,
    private ticker: TickerService,
  ) {}
}
