import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
          <p>Shop Now!</p>
        </div>
      </div>
    );
  }
}

export default MenuItem;
