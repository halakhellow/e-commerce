import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return <div>Register</div>;
  }
}

export default Register;
