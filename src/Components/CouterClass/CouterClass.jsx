import React, { Component } from 'react';

class CouterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setCount({ count: this.state.count + 1 });
  }

  decrement() {
    this.setCount({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>1</h1>
      </div>
    );
  }
}

export default CouterClass;
