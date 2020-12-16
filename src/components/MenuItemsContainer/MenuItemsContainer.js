import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMenuItems } from "../../redux/menu/menu-selectors";

import MenuItem from "../MenuItem/MenuItem";

import "./MenuItemsContainer.css";

let MenuItemsContainer = ({ menuItems }) => (
  <div
    id="carousel"
    className="carousel slide carousel-fade"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" className="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
      <li data-target="#carousel" data-slide-to="3"></li>
      <li data-target="#carousel" data-slide-to="4"></li>
    </ol>
    <div className="carousel-inner">
      {menuItems.map((item, index) => (
        <MenuItem
          key={item.id}
          title={item.title}
          src={item.src}
          index={index}
        />
      ))}
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

let mapStateToProps = createStructuredSelector({
  menuItems: selectMenuItems,
});

export default connect(mapStateToProps)(MenuItemsContainer);
