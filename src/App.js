import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ItemsNavbar from "./components/ItemsNavbar/ItemsNavbar";
import { Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import { auth } from "./firebase/firebaseUtilities";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
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
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/hats" render={() => <h1>Hats</h1>} />
        <Route exact path="/jackets" render={() => <h1>Jackets</h1>} />
        <Route exact path="/shoes" render={() => <h1>Shoes</h1>} />
        <Route exact path="/womens" render={() => <h1>Womens</h1>} />
      </div>
    );
  }
}

export default App;
