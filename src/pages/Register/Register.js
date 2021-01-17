import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/FormInput/FormInput";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import HrWithText from "../../components/HrWithText/HrWithText";

import { signUpStart } from "../../redux/user/user-actions";

import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ errors: "The passwords don't match" });
      return;
    }
    this.props.signUpStart({ email, password, displayName });
  }

  render() {
    let { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="Register">
        <HrWithText content="Create New Account" />
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={displayName}
            type="text"
            name="displayName"
            faIcon="user"
            placeholder="Name"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={email}
            type="email"
            name="email"
            faIcon="envelope"
            placeholder="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={password}
            type="password"
            name="password"
            faIcon="lock"
            placeholder="Password"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            faIcon="lock"
            placeholder="Confirm Password"
            required
          />
          <div className="Register-error">{this.state.errors}</div>
          <CustomBtn type="submit">Sign up</CustomBtn>
        </form>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(Register);
