import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

let ShopPage = () => (
  <div>
    <Route exact path="/shop" component={CollectionOverview} />
    <Route exact path="/shop/:collection" component={CollectionPage} />
  </div>
);

export default ShopPage;
