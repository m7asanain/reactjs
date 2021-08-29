import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  buttonHandler() {
    console.log('Button Clicked!');
  }

  render() {
    return(
      <React.Fragment>
        <span className={this.getbadgeClasses()}>{this.counterFormat()}</span>
        <button onClick={this.buttonHandler} className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    )
  }

  getbadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  counterFormat() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;