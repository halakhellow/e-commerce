import React from "react";
import { NavLink } from "react-router-dom";

import "./CollectionsNavbar.css";

let CollectionsNavbar = () => (
  <div className="CollectionsNavbar">
    <NavLink activeClassName="active" to="/shop/hats">
      Hats
    </NavLink>
    <NavLink activeClassName="active" to="/shop/jackets">
      Jackets
    </NavLink>
    <NavLink activeClassName="active" to="/shop/shoes">
      Shoes
    </NavLink>
    <NavLink activeClassName="active" to="/shop/womens">
      Womens
    </NavLink>
    <NavLink activeClassName="active" to="/shop/mens">
      Mens
    </NavLink>
  </div>
);

export default CollectionsNavbar;
