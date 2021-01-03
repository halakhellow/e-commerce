import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebaseUtilities";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import { updateCollections } from "../../redux/shop/shop-actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    let { updateCollections } = this.props;
    let collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot((snapshot) => {
      let collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections);
    });
  }

  render() {
    return (
      <div>
        <Route exact path="/shop" component={CollectionOverview} />
        <Route exact path="/shop/:collection" component={CollectionPage} />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
