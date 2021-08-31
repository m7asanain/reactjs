import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {  
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  handelDelete = () => {
    console.log("Event Handler Clicked!");
    // if (this.state.value > 0) {
    //   this.setState({ value: this.state.value - 1 });
    // }
  };

  render() { 
    return (
      <div>
        {this.state.counters.map(counter => 
          <Counter key={counter.id} onDelete={this.handelDelete} value={counter.value} id={counter.id}/>)}
      </div>
    );
  }
}
 
export default Counters;