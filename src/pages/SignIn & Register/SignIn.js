import React, { Component } from "react";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import FormInput from "../../components/FormInput/FormInput";
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
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  }
  render() {
    return (
      <div>
        <h4>Sign in with your email and password!</h4>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="text"
            placeholder="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <CustomBtn type="submit">Sign in</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignIn;
