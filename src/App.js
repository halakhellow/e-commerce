import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user-selectors";

import { checkUserSession } from "./redux/user/user-actions";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

import "./App.css";

let App = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Route exact path={["/e-commerce", "/"]} component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/sign-in"
        render={() =>
          this.props.currentUser ? <Redirect to="/" /> : <SignIn />
        }
      />
      <Route
        exact
        path="/register"
        render={() =>
          this.props.currentUser ? <Redirect to="/" /> : <Register />
        }
      />
    </div>
  );
};

let mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

let mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
