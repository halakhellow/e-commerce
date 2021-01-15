import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";

import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    return (
      <div>
        <Route exact path="/shop" component={CollectionOverviewContainer} />
        <Route
          exact
          path="/shop/:collection"
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
