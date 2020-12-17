import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

let ShopPage = ({ collections }) => (
  <div>
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} collection={collection} />
    ))}
  </div>
);

let mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
