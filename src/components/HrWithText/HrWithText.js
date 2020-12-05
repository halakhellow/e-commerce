import React, { Component } from "react";
import "./HrWithText.css";

class HrWithText extends Component {
  render() {
    return <hr className="hr-text" data-content={this.props.content} />;
  }
}
export default HrWithText;
