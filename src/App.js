import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ItemsNavbar from "./components/ItemsNavbar/ItemsNavbar";
import { Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn & Register/SignIn";

function App() {
  return (
    <div>
      <Header />
      <ItemsNavbar />
      <Route exact path={["/e-commerce", "/"]} component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/hats" render={() => <h1>Hats</h1>} />
      <Route exact path="/jackets" render={() => <h1>Jackets</h1>} />
      <Route exact path="/shoes" render={() => <h1>Shoes</h1>} />
      <Route exact path="/womens" render={() => <h1>Womens</h1>} />
      <Route exact path="/mens" render={() => <h1>Mens</h1>} />
    </div>
  );
}

export default App;
