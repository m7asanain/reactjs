import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return  (
      // React.Fragment like a div but does'nt show like a div
      <React.Fragment>
        <h1>{this.formatCounter()}</h1>
        <button>Incrument</button>
      </React.Fragment>
    )  
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;

    // return this.state.count === 0 ? 'zero' : this.state.count;
  }
}

export default Counter;