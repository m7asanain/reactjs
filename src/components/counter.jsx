import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    // imgUrl: 'https://picsum.photos/400' // to generator an image
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: 'bold'
  // };

  render() {
    return  (
      // React.Fragment like a div but does'nt show like a div
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span className="badge badge-primary m-2">{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Incrument</button>

        {/* <button style={ this.styles }>Incrument</button> */}
        {/* inline css */}
        {/* <button style={{ fontSize: 50 }}>Incrument</button> */} 


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