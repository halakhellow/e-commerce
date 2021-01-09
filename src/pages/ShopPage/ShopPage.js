import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsAsync } from "../../redux/shop/shop-actions";

import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
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
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
