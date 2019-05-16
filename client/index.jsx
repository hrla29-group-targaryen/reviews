import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: []
    }
  }

  render() {
    return (
      <div>
        Reviews
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('app'));