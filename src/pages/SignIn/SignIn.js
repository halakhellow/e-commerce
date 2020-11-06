import React, { Component } from "react";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
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
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  }
  render() {
    return (
      <div className="SignIn">
        <h4>Welcome!</h4>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={this.state.email}
            id="email"
            type="text"
            placeholder="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          <CustomBtn type="submit">Sign in</CustomBtn>
        </form>
        <div className="register">
          <span>Don't have an account ? </span>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
