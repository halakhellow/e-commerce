import { createSelector } from "reselect";

let selectShop = (state) => state.shop;

let selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export { selectShopCollections };
