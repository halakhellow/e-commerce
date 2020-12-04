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
            id="user"
            placeholder="Name"
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            value={email}
            type="email"
            id="envelope"
            placeholder="Email"
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            value={password}
            type="password"
            id="lock"
            placeholder="Password"
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            value={confirmPassword}
            type="password"
            id="lock"
            placeholder="Confirm Password"
            required
          ></FormInput>
        </form>
      </div>
    );
  }
}

export default Register;
