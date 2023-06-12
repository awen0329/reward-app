import React, { Component } from "react";
import { router } from "../../App";
import {
  BTN_TRY_AGAIN,
  MSG_ERROR,
  TEST_ERROR_BOUNDARY_BACK_BUTTON,
} from "../../constants";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  handleGoBack = () => {
    router.navigate("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{MSG_ERROR}</h1>
          <button
            data-testid={TEST_ERROR_BOUNDARY_BACK_BUTTON}
            onClick={this.handleGoBack}
          >
            {BTN_TRY_AGAIN}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
