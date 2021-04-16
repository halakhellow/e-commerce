import React, { useEffect, lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user-selectors";

import { checkUserSession } from "./redux/user/user-actions";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoudary/ErrorBoundary";

import "./App.css";

let HomePage = lazy(() => import("./pages/HomePage/HomePage"));
let ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
let CheckoutPage = lazy(() => import("./pages/Checkout/CheckoutPage"));
let SignIn = lazy(() => import("./pages/SignIn/SignIn"));
let Register = lazy(() => import("./pages/Register/Register"));

let App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Route exact path={["/e-commerce", "/"]} component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
          />
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
          />
        </Suspense>
      </ErrorBoundary>
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
