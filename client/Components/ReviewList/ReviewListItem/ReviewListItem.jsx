import React from 'react';
import moment from 'moment';
import './reviewListItem.css';

const ReviewListItem = (props) => {
  let reviewStatus;
  if (props.review.user.topReviewer === true) {
    reviewStatus = 'Top reviewer';
  } else if (props.review.user.numOfRatings === 1) {
    reviewStatus = '1 review';
  } else {
    reviewStatus = props.review.user.numOfRatings + ' reviews';
  }

  return (
    <div>
        <div className="reviewListItem-test">
        <div className="reviewListItem-firstLetter">{props.review.user.firstLetter}</div><br/>
        {props.review.user.firstName}<br/>
        {reviewStatus}<br/>
        {moment(props.review.date).format('MMM Do, YYYY')}<br/>
        {props.review.comments}
      </div>
    </div>
  )
}

export default ReviewListItem;