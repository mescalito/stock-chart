import { createReducer, on } from '@ngrx/store';
import { StockWishlist, Ticker } from '@st/interfaces';
import {
  AddStock,
  AddTicker,
  LoadWishlist,
  SuccessAddStock,
  SuccessAddTicker,
  SuccessLoadWishlist,
} from './stock.action';

export const StockFeatureKey = 'stock';

export interface Wishlist extends StockWishlist {
  ticker?: Array<Partial<Ticker>>;
}

export interface WishlistState {
  wishlist: Wishlist[];
}

export const initStock: WishlistState = { wishlist: null };

export const stockReducer = createReducer(
  initStock,
  on(LoadWishlist, state => state),
  on(SuccessLoadWishlist, (state: WishlistState, { payload }) => ({
    ...state,
    ...payload,
  })),
  on(AddStock, state => state),
  on(SuccessAddStock, (state: WishlistState, { payload }) => {
    let wishlist = Object.assign([], state.wishlist);
    wishlist = [...wishlist, payload];
    return { ...state, ...{ wishlist } };
  }),
  on(AddTicker, state => state),
);
