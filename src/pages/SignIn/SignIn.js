import React, { useState } from "react";
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

let SignIn = ({ emailSignInStart, googleSignInStart }) => {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let { email, password } = userData;

  let handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  return (
    <div className="SignIn">
      <HrWithText content="Welcome!" />
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          value={email}
          faIcon="envelope"
          name="email"
          type="text"
          placeholder="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          value={password}
          faIcon="lock"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <div className="SignIn-buttons">
          <CustomBtn type="submit">Sign in</CustomBtn>
          <CustomBtn type="button" onClick={googleSignInStart} googleSignIn>
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
};

let mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
