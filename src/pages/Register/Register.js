import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../components/FormInput/FormInput";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import HrWithText from "../../components/HrWithText/HrWithText";

import { signUpStart } from "../../redux/user/user-actions";

import "./Register.css";

let Register = ({ signUpStart }) => {
  let [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: "",
  });

  let { displayName, email, password, confirmPassword, errors } = userData;

  let handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setUserData({ ...userData, errors: "The passwords don't match" });
      return;
    }
    signUpStart({ email, password, displayName });
  };

  return (
    <div className="Register">
      <HrWithText content="Create New Account" />
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          value={displayName}
          type="text"
          name="displayName"
          faIcon="user"
          placeholder="Name"
          required
        />
        <FormInput
          handleChange={handleChange}
          value={email}
          type="email"
          name="email"
          faIcon="envelope"
          placeholder="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          value={password}
          type="password"
          name="password"
          faIcon="lock"
          placeholder="Password"
          required
        />
        <FormInput
          handleChange={handleChange}
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          faIcon="lock"
          placeholder="Confirm Password"
          required
        />
        <div className="Register-error">{errors}</div>
        <CustomBtn type="submit">Sign up</CustomBtn>
      </form>
    </div>
  );
};

let mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(Register);
