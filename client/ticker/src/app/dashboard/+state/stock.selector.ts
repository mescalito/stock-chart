import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StockFeatureKey, StockState } from './stock.reducer';

export const SelectStock = createFeatureSelector(StockFeatureKey);

export const SelectWishlist = createSelector(
  SelectStock,
  (state: StockState) => state.wishlist,
);

export const SelectTicker = createSelector(
  SelectStock,
  (state: StockState) => state.ticker,
);
