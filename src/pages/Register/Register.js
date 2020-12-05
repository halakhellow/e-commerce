import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import { auth, createUserProfile } from "../../firebase/firebaseUtilities";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <h4>Sign up with email and password :</h4>
        <form>
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
          <CustomBtn type="submit">Sign up</CustomBtn>
        </form>
      </div>
    );
  }
}

export default Register;
