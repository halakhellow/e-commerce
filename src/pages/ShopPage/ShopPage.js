import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebaseUtilities";

import withLoader from "../../components/withLoader/withLoader";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import { updateCollections } from "../../redux/shop/shop-actions";

let CollectionOverviewWithLoader = withLoader(CollectionOverview);
let CollectionPageWithLoader = withLoader(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    let { updateCollections } = this.props;
    let collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot((snapshot) => {
      let collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections);
      this.setState({ loading: false });
    });
  }

  render() {
    let { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path="/shop"
          render={(props) => (
            <CollectionOverviewWithLoader isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path="/shop/:collection"
          render={(props) => (
            <CollectionPageWithLoader isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
