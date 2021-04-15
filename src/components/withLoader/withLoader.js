import React from "react";

import Loader from "../Loader/Loader";

let withLoader = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? <Loader /> : <WrappedComponent {...otherProps} />;

export default withLoader;
