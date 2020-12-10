import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import CustomBtn from "../CustomBtn/CustomBtn";
import "./CollectionItem.css";

class CollectionItem extends Component {
  render() {
    let { name, imageUrl, price } = this.props.item;
    let { addItem, item } = this.props;
    return (
      <div className="CollectionItem">
        <div
          className="CollectionItem-img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="CollectionItem-footer">
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <CustomBtn onClick={() => addItem(item)}>Add to Cart</CustomBtn>
      </div>
    );
  }
}

let mapDispatchTOProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchTOProps)(CollectionItem);
