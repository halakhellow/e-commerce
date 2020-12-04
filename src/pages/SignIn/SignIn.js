import React, { Component } from "react";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebaseUtilities";
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
            id="envelope"
            type="text"
            placeholder="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            id="lock"
            type="password"
            placeholder="Password"
            required
          />
          <div className="SignIn-buttons">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} googleSignIn>
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

export default SignIn;
