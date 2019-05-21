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

  console.log(ordered)

  return (
    <div>
        <div className="reviewListItem-test">
        <div className="reviewListItem-firstLetter">{props.review.user.firstLetter}</div><br/>
        {props.review.user.firstName}<br/>
        {reviewStatus}<br/>
        {moment(props.review.date).format('MMM Do, YYYY')}<br/>
        {props.review.comments}<br/>
        {ordered}<br/>
      </div>
    </div>
  )
}

export default ReviewListItem;