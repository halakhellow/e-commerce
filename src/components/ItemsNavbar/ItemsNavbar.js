import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./ItemsNavbar.css";

class ItemsNavbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <NavLink activeClassName="active" to="/hats" >Hats </NavLink>
                <NavLink activeClassName="active" to="/jackets" >Jackets </NavLink>
                <NavLink activeClassName="active" to="/shoes" >Shoes </NavLink>
                <NavLink activeClassName="active" to="/womens" >Womens </NavLink>
                <NavLink activeClassName="active" to="/mens" >Mens </NavLink>
            </div>
        )
    }
}

export default ItemsNavbar;