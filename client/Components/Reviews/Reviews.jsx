import React from 'react';
import './reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        Reviews
        <div className="review-test">
        {this.props.reviewData.map(function(item, index) {
          return item.user.firstName
        })}
        </div>
      </div>
    )
  }
}

export default Reviews;