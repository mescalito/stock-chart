import { createReducer, on } from '@ngrx/store';
import { StockWishlist, Ticker } from '@st/interfaces';
import {
  SuccessAddStock,
  SuccessAddTicker,
  SuccessLoadWishlist,
  SuccessRemoveStock,
  SuccessSubTicker,
} from './stock.action';

export const StockFeatureKey = 'stock';

export interface Wishlist extends StockWishlist {}

export interface StockState {
  wishlist: Wishlist[];
  ticker: { [key: string]: Array<Partial<Ticker>> };
}

export const initStock: StockState = { wishlist: null, ticker: {} };

export const stockReducer = createReducer(
  initStock,
  on(SuccessLoadWishlist, (state: StockState, { payload }) => ({
    ...state,
    ...{ wishlist: payload },
  })),
  on(SuccessAddStock, (state: StockState, { payload }) => {
    let wishlist = Object.assign([], state.wishlist);
    wishlist = [...wishlist, payload];
    return { ...state, ...{ wishlist } };
  }),
  on(SuccessRemoveStock, (state: StockState, { id: deleteId, symbol }) => {
    let wishlist = Object.assign([], state.wishlist);
    let ticker = Object.assign({}, state.ticker);
    wishlist = wishlist.filter(({ id }) => id !== deleteId);
    delete ticker[symbol];
    return { ...state, ...{ wishlist, ticker } };
  }),
  on(SuccessAddTicker, (state: StockState, { payload }) => {
    const { symbol } = payload[0];
    state.ticker[symbol] = payload;
    return state;
  }),
  on(SuccessSubTicker, (state: StockState, { payload }) => {
    const { symbol } = payload;
    const ticker = [payload, ...(state.ticker[symbol] || [])];
    state.ticker[symbol] = ticker;
    return state;
  }),
);
