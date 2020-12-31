import { createAction, props } from '@ngrx/store';
import { StockWishlist, Ticker } from '@st/interfaces';
import { StockState } from './stock.reducer';

export const LoadWishlist = createAction('[Wishlist] Load Init');

export const AddStock = createAction(
  '[Wishlist] Add Stock',
  props<{ symbol: string }>(),
);

export const RemoveStock = createAction(
  '[Wishlist] Remove Stock',
  props<{ id: string; symbol: string }>(),
);

export const AddTicker = createAction(
  '[Wishlist] Add Ticker',
  props<{ symbol: string }>(),
);

export const SubTicker = createAction(
  '[Wishlist] Sub Ticker',
  props<{ symbol: string }>(),
);

export const UnsubTicker = createAction(
  '[Wishlist] Unsub Ticker',
  props<{ symbol: string }>(),
);

export const SuccessLoadWishlist = createAction(
  '[Wishlist] Load Success',
  props<{ payload: StockWishlist[] }>(),
);

export const SuccessAddStock = createAction(
  '[Wishlist] Add Stock Success',
  props<{ payload: StockWishlist }>(),
);

export const SuccessRemoveStock = createAction(
  '[Wishlist] Remove Stock Success',
  props<{ id: string; symbol: string }>(),
);

export const SuccessAddTicker = createAction(
  '[Wishlist] Add Ticker Success',
  props<{ payload: Ticker[] }>(),
);

export const SuccessSubTicker = createAction(
  '[Wishlist] Sub Ticker Success',
  props<{ payload: Ticker }>(),
);

export const SuccessUnsubTicker = createAction(
  '[Wishlist] Unsub Ticker Success',
);
