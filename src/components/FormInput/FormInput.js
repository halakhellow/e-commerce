import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  render() {
    return (
      <div className="FormInput">
        <label
          htmlFor={this.props.id}
          className={`fas fa-${this.props.faIcon}`}
        ></label>
        <input onChange={this.props.handleChange} {...this.props} />
      </div>
    );
  }
}

export default FormInput;
