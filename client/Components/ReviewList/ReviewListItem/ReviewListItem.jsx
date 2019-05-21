import React from 'react';
import moment from 'moment';
import OrderItem from './OrderItem/OrderItem.jsx';
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

  let ordered;
  if (props.review.Ordered.length > 0) {
    ordered = <div>{props.review.user.firstName} ordered: {props.review.Ordered.map(function(order, index) {
      return <OrderItem order={order} key={index}/>
    })}</div>
  }

  return (
    <div className="reviewListItem-body">
      <div className="reviewListItem-header">
        <div className="reviewListItem-avatar">{props.review.user.firstLetter}</div>
        <div className="reviewListItem-firstName">{props.review.user.firstName}</div>
        <div className="reviewListItem-date">{moment(props.review.date).format('MMM Do, YYYY')}</div><br />
        <div className="reviewListItem-reviewStatus">{reviewStatus}</div><br />
      </div>
      <div className="reviewListItem-stars">*****STARS GO HERE*****</div>
      <div className="reviewListItem-comments">{props.review.comments}</div><br />

      {ordered}<br/>
    </div>
  )
}

export default ReviewListItem;