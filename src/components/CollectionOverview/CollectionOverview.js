import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { NavLink } from "react-router-dom";

import { selectShopCollections } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import "./CollectionOverview.css";

let CollectionOverview = ({ collections }) => (
  <div className="CollectionOverview">
    <div className="Navbar">
      <NavLink activeClassName="active" to="/shop/hats">
        Hats
      </NavLink>
      <NavLink activeClassName="active" to="/shop/jackets">
        Jackets
      </NavLink>
      <NavLink activeClassName="active" to="/shop/shoes">
        Shoes
      </NavLink>
      <NavLink activeClassName="active" to="/shop/womens">
        Womens
      </NavLink>
      <NavLink activeClassName="active" to="/shop/mens">
        Mens
      </NavLink>
    </div>
    <div>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  </div>
);

let mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
