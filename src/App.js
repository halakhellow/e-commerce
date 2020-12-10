import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ItemsNavbar from "./components/ItemsNavbar/ItemsNavbar";
import { Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import { auth, createUserDocument } from "./firebase/firebaseUtilities";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    let { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        let userRef = await createUserDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <ItemsNavbar />
        <Route exact path={["/e-commerce", "/"]} component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
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
        <Route exact path="/hats" render={() => <h1>Hats</h1>} />
        <Route exact path="/jackets" render={() => <h1>Jackets</h1>} />
        <Route exact path="/shoes" render={() => <h1>Shoes</h1>} />
        <Route exact path="/womens" render={() => <h1>Womens</h1>} />
      </div>
    );
  }
}

let mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

let mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
