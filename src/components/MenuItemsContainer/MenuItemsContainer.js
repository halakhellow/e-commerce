import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";
import hats from "../../images/hats.jpg";
import jackets from "../../images/jackets.jpg";
import shoes from "../../images/shoes.jpg";
import mens from "../../images/mens.webp";
import womens from "../../images/womens.jpeg";
import "./MenuItemsContainer.css";

class MenuItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: "HATS", src: hats, id: 0 },
        { title: "JACKETS", src: jackets, id: 1 },
        { title: "SHOES", src: shoes, id: 2 },
        { title: "WOMENS", src: womens, id: 3 },
        { title: "MENS", src: mens, id: 4 },
      ],
    };
  }
  render() {
    return (
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
          {this.state.items.map((item, index) => (
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default MenuItemsContainer;
