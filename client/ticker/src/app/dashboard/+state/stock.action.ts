import { createAction, props } from '@ngrx/store';
import { StockWishlist, Ticker } from '@st/interfaces';
import { WishlistState } from './stock.reducer';

export const LoadWishlist = createAction('[Wishlist] Load Init');

export const AddStock = createAction(
  '[Wishlist] Add Stock',
  props<{ symbol: string }>(),
);

export const AddTicker = createAction(
  '[Wishlist] Add Ticker',
  props<{ symbol: string }>(),
);

export const SubTicker = createAction(
  '[Wishlist] Sub Ticker',
  props<{ symbol: string }>(),
);

export const SuccessLoadWishlist = createAction(
  '[Wishlist] Load Success',
  props<{ payload: WishlistState }>(),
);

export const SuccessAddStock = createAction(
  '[Wishlist] Add Stock Success',
  props<{ payload: StockWishlist }>(),
);

export const SuccessAddTicker = createAction(
  '[Wishlist] Add Ticker Success',
  props<{ payload: Ticker[] }>(),
);

export const SuccessSubTicker = createAction(
  '[Wishlist] Sub Ticker Success',
  props<{ payload: Ticker }>(),
);
