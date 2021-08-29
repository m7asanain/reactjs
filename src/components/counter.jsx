import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [], // 'tag1', 'tag2', 'tag3'
  };

  renderHelper() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  render() {
    return  (
      <React.Fragment>
        {/* another technique for conditional rendering content */}
        {this.state.tags.length === 0 && 'Please add some tags!'}
        {this.renderHelper()}
      </React.Fragment>
    )  
  }

}

export default Counter;