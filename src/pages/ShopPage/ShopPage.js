import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import withLoader from "../../components/withLoader/withLoader";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import { fetchCollectionsAsync } from "../../redux/shop/shop-actions";

import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop-selectors";

let CollectionOverviewWithLoader = withLoader(CollectionOverview);
let CollectionPageWithLoader = withLoader(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    let { isFetching, isCollectionLoaded } = this.props;
    return (
      <div>
        <Route
          exact
          path="/shop"
          render={(props) => (
            <CollectionOverviewWithLoader isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path="/shop/:collection"
          render={(props) => (
            <CollectionPageWithLoader
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

let mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

let mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
