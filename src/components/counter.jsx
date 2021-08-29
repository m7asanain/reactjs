import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return  (
      // React.Fragment like a div but does'nt show like a div
      <React.Fragment>
        <h1>Hello World!</h1>
        <button>Incrument</button>
      </React.Fragment>
    )  
  }
}

export default Counter;