import React from 'react';
import ReviewListItem from './ReviewListItem/ReviewListItem.jsx';
import './reviewList.css';

const ReviewList = (props) => {
  return (
    <div>
      <div className="reviewList-test">
        Review List
        {props.reviewData.map(function (item, index) {
          return <ReviewListItem review={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default ReviewList;