import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop-selectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem";
import CollectionsNavbar from "../../components/CollectionsNavbar/CollectionsNavbar";

import "./CollectionPage.css";

let CollectionPage = ({ collection }) => {
  let { title, items } = collection;
  return (
    <div className="CollectionPage">
      <CollectionsNavbar />
      <h1 className="CollectionPage-title">{title}</h1>
      <div className="CollectionPage-items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

let mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
});

export default connect(mapStateToProps)(CollectionPage);
