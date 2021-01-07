import { createSelector } from "reselect";
import memoize from "lodash.memoize";

let selectShop = (state) => state.shop;

let selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

let selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);

let selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

let selectIsCollectionLoaded = createSelector([selectShop], (shop) =>
  shop.collections ? true : false
);

export {
  selectShopCollections,
  selectCollection,
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
};
