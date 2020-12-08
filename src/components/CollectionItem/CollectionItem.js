import React, { Component } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import "./CollectionItem.css";

class CollectionItem extends Component {
  render() {
    return (
      <div className="CollectionItem">
        <div
          className="CollectionItem-img"
          style={{ backgroundImage: `url(${this.props.imageUrl})` }}
        ></div>
        <div className="CollectionItem-footer">
          <span>{this.props.name}</span>
          <span>${this.props.price}</span>
        </div>
        <CustomBtn>Add to Cart</CustomBtn>
      </div>
    );
  }
}

export default CollectionItem;
