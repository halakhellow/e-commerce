import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop-selectors";

import "./CollectionPage.css";

let CollectionPage = ({ collection }) => (
  <div className="CollectionPage">
    <h1>{collection.title}</h1>
  </div>
);

let mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
});

export default connect(mapStateToProps)(CollectionPage);
