import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StockFeatureKey, WishlistState } from './stock.reducer';

export const SelectStock = createFeatureSelector(StockFeatureKey);

export const SelectWishlist = createSelector(
  SelectStock,
  (state: WishlistState) => state.wishlist,
);
