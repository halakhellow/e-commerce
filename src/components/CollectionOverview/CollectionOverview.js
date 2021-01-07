import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import CollectionsNavbar from "../CollectionsNavbar/CollectionsNavbar";

let CollectionOverview = ({ collections }) => (
  <div>
    <CollectionsNavbar />
    <div>
      {collections
        ? Object.keys(collections).map((key) => (
            <CollectionPreview
              key={collections[key].id}
              collection={collections[key]}
            />
          ))
        : null}
    </div>
  </div>
);

let mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
