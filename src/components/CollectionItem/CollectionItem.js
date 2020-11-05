import React, { Component } from "react";
import "./CollectionItem.css";

class CollectionItem extends Component {
  render() {
    return (
      <div className="CollectionItem">
        <div style={{ backgroundImage: `url(${this.props.imageUrl})` }}></div>
        <div className="CollectionItem-footer">
          <span>{this.props.name}</span>
          <span>${this.props.price}</span>
        </div>
      </div>
    );
  }
}

export default CollectionItem;
