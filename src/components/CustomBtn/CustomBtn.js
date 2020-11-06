import React, { Component } from "react";
import "./CustomBtn.css";

class CustomBtn extends Component {
  render() {
    return <button className="CustomBtn" {...this.props}></button>;
  }
}

export default CustomBtn;
