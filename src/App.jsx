import React, { Component } from 'react';
import './App.css';
import DivisionOperationWithErrorBoundary from './Components/DivisionOperation.jsx';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <DivisionOperationWithErrorBoundary />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
