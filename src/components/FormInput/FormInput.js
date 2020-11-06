import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  render() {
    let envelope = "fa fa-envelope",
      lock = "fas fa-lock";
    return (
      <div className="FormInput">
        <label
          htmlFor={this.props.id}
          className={this.props.id === "email" ? envelope : lock}
        ></label>
        <input onChange={this.props.handleChange} {...this.props} />
      </div>
    );
  }
}

export default FormInput;
