import React from "react";

import "./withLoader.css";

let withLoader = (WrappedComponent) => {
  let loader = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return loader;
};

export default withLoader;
