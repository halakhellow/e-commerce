import React, { Component } from "react";
import "./CustomBtn.css";

class CustomBtn extends Component {
  render() {
    return (
      <button
        className={`${
          this.props.googleSignIn ? "google-sign-in" : ""
        } CustomBtn`}
        {...this.props}
      ></button>
    );
  }
}

export default CustomBtn;
