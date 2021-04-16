import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.css";

class MenuItem extends Component {
  render() {
    let activeClass = this.props.index === 0 ? "active" : "";
    return (
      <div className={`carousel-item ${activeClass}`} data-interval="3000">
        <img src={this.props.src} alt={this.props.title} />
        <div
          onClick={() =>
            this.props.history.push(`/shop/${this.props.title.toLowerCase()}`)
          }
          className="carousel-caption d-none d-md-block"
        >
          <h1>{this.props.title}</h1>
          <p>Shop Now!</p>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuItem);
