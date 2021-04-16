import React from "react";

import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return this.state.hasError ? (
      <div className="ErrorContainer">
        <div className="ErrorImage"></div>
        <p className="ErrorText">Sorry, This Page is Broken </p>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
