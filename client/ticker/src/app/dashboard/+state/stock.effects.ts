import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  AddStock,
  AddTicker,
  LoadWishlist,
  SuccessAddStock,
  SuccessAddTicker,
  SuccessLoadWishlist,
} from './stock.action';
import { WishlistService } from '../../_services/wishlist.service';
import { StockWishlist, Ticker } from '@st/interfaces';
import { TickerService } from '../../_services/ticker.service';

@Injectable()
export class StockEffects {
  LoadWishlist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadWishlist),
      mergeMap(() =>
        this.wishlist
          .getList()
          .pipe(
            map((wishlist: StockWishlist[]) =>
              SuccessLoadWishlist({ payload: { wishlist } }),
            ),
          ),
      ),
    ),
  );

  addStock$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddStock),
      mergeMap(data =>
        this.wishlist
          .addStock(data)
          .pipe(
            map((wishlist: StockWishlist) =>
              SuccessAddStock({ payload: wishlist }),
            ),
          ),
      ),
    ),
  );

  addTicker = createEffect(() =>
    this.actions$.pipe(
      ofType(AddTicker),
      mergeMap(data =>
        this.ticker
          .getTicker(data)
          .pipe(
            map((ticker: Ticker[]) => SuccessAddTicker({ payload: ticker })),
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
