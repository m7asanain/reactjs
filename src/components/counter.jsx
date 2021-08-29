import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    // let classes = 'badge m-2 badge-';
    // classes += this.state.count === 0 ? 'warning' : 'primary';

    return  (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button className='btn btn-sm btn-secondary'>Incrument</button>
      </React.Fragment>
    )  
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;