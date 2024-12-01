import React, { Component } from 'react';
import ErrorHandle from './ErrorHandle.jsx';

class DivisionOperation extends Component {
  state = {
    numerator: '',
    denominator: '',
    result: null,
    error: null,
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCalculation = () => {
    const { numerator, denominator } = this.state;
    const num = parseFloat(numerator);
    const denom = parseFloat(denominator);

    if (isNaN(num) || isNaN(denom)) {
      this.setState({ error: 'Please enter valid numbers.', result: null });
      return;
    }

    if (denom <= 0) {
      this.setState({
        error: 'Denominator must be greater than 0',
        result: null,
      });
      throw new Error('Denominator must be greater than 0');
    }

    this.setState({
      result: num / denom,
      error: null,
    });
  };

  render() {
    return (
      <div>
        <h3>Division Operation</h3>
        <div>
          <label>
            Numerator:{' '}
            <input
              type="number"
              name="numerator"
              value={this.state.numerator}
              onChange={this.handleInput}
              placeholder="Enter numerator"
            />
          </label>
        </div>
        <div>
          <label>
            Denominator:{' '}
            <input
              type="number"
              name="denominator"
              value={this.state.denominator}
              onChange={this.handleInput}
              placeholder="Enter denominator"
            />
          </label>
        </div>
        <button onClick={this.handleCalculation}>Calculate</button>

        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        {this.state.result !== null && (
          <p>Result: {this.state.result.toFixed(2)}</p>
        )}
      </div>
    );
  }
}

export default function DivisionOperationWithErrorBoundary() {
  return (
    <ErrorHandle>
      <DivisionOperation />
    </ErrorHandle>
  );
}
