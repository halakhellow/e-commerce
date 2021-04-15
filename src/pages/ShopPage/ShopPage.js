import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

import Loader from "../../components/Loader/Loader";
let CollectionOverviewContainer = lazy(() =>
  import("../../components/CollectionOverview/CollectionOverviewContainer")
);
let CollectionPageContainer = lazy(() =>
  import("../CollectionPage/CollectionPageContainer")
);

let ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Suspense fallback={<Loader />}>
      <Route exact path="/shop" component={CollectionOverviewContainer} />
      <Route
        exact
        path="/shop/:collection"
        component={CollectionPageContainer}
      />
    </Suspense>
  );
};

let mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
