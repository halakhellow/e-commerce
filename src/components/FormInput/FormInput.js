import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  render() {
    return (
      <div className="FormInput">
        {this.props.value ? <label>{this.props.name}</label> : null}
        <input onChange={this.props.handleChange} {...this.props} />
      </div>
    );
  }
}

export default FormInput;
