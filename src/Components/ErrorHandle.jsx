import React from 'react';

export default class ErrorHandle extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error: Denominator must be greater than 0</h1>;
    }
    return this.props.children;
  }
}
