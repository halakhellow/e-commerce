import { createSelector } from "reselect";
import memoize from "lodash.memoize";

let selectShop = (state) => state.shop;

let selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

let selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collectionUrlParam === collection.routeName
    )
  )
);

export { selectShopCollections, selectCollection };
