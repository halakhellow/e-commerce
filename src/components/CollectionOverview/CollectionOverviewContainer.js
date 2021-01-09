import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";

import withLoader from "../withLoader/withLoader";
import CollectionOverview from "./CollectionOverview";

let mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

let CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withLoader
)(CollectionOverview);

export default CollectionOverviewContainer;
