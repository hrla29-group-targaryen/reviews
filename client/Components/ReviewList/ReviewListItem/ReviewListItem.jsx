import React from 'react';
import './reviewListItem.css';

const ReviewListItem = (props) => {
  return (
    <div>
        <div className="reviewListItem-test">
        {props.review.starRating}
      </div>
    </div>
  )
}

export default ReviewListItem;