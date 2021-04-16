import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.css";

class CollectionPreview extends Component {
  render() {
    let collection = this.props.collection;
    return (
      <div className="CollectionPreview">
        <h3
          onClick={() =>
            this.props.history.push(`/shop/${collection.title.toLowerCase()}`)
          }
        >
          {collection.title}
        </h3>
        <div className="CollectionPreview-div">
          {collection.items
            .filter((item, index) => index < 5)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(CollectionPreview);
