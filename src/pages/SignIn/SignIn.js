import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CustomBtn from "../../components/CustomBtn/CustomBtn";
import FormInput from "../../components/FormInput/FormInput";
import HrWithText from "../../components/HrWithText/HrWithText";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";

import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.emailSignInStart(email, password);
  }
  render() {
    return (
      <div className="SignIn">
        <HrWithText content="Welcome!" />
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={this.state.email}
            faIcon="envelope"
            name="email"
            type="text"
            placeholder="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            faIcon="lock"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <div className="SignIn-buttons">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn
              type="button"
              onClick={this.props.googleSignInStart}
              googleSignIn
            >
              Sign in with
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </CustomBtn>
          </div>
        </form>
        <div className="register">
          <span>Don't have an account ? </span>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
