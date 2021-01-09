import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoaded } from "../../redux/shop/shop-selectors";

import withLoader from "../../components/withLoader/withLoader";
import CollectionPage from "./CollectionPage";

let mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

let CollectionPageContainer = compose(
  connect(mapStateToProps),
  withLoader
)(CollectionPage);

export default CollectionPageContainer;
