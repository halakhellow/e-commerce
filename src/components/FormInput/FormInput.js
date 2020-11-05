import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  render() {
    return <input onChange={this.props.handleChange} {...this.props} />;
  }
}

export default FormInput;
