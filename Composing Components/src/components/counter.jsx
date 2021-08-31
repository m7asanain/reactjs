import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div className="container">
        {/* className={this.getbadgeClasses()} */}
        <span>{this.counterFormat()}</span>
        <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm m-2">Increment</button>
        <br></br>
      </div>
    );
  }

  getbadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.value === 0) ? 'warning' : 'primary';
    return classes;
  }

  counterFormat() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;