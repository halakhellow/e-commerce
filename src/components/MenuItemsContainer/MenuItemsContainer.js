import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

class MenuItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: "Hats", id: 0 },
        { title: "Jackets", id: 1 },
        { title: "Shoes", id: 2 },
        { title: "Womens", id: 3 },
        { title: "Mens", id: 4 },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <MenuItem key={item.id} title={item.title} />
        ))}
      </div>
    );
  }
}

export default MenuItemsContainer;
