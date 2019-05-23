import React from 'react';
import moment from 'moment';
import OrderItem from './OrderItem/OrderItem.jsx';
import './reviewListItem.css';

const ReviewListItem = (props) => {
  //Number of reviews + image next to it
  let reviewStatus;
  let reviewImage;
  if (props.review.user.topReviewer === true) {
    reviewStatus = 'Top reviewer';
    reviewImage = <img className="reviewListItem-trophy" src="grubhubTrophy.png" alt="trophy"></img>
  } else if (props.review.user.numOfRatings === 1) {
    reviewStatus = '1 review';
    reviewImage = <img className="reviewListItem-blueStar" src="grubhubBlueStar.png" alt="blueStar"></img>
  } else {
    reviewStatus = props.review.user.numOfRatings + ' reviews';
    reviewImage = <img className="reviewListItem-blueStar" src="grubhubBlueStar.png" alt="blueStar"></img>
  }
  
  //starRating image
  let starImage;
  let numStars = props.review.starRating;
  if (numStars === 1) {
    starImage = <img className="reviewListItem-oneStar" src="grubhub1star.png" alt="1star"></img>
  } else if (numStars === 2) {
    starImage = <img className="reviewListItem-twoStar" src="grubhub2star.png" alt="2star"></img>
  } else if (numStars === 3) {
    starImage = <img className="reviewListItem-threeStar" src="grubhub3star.png" alt="3star"></img>
  } else if (numStars === 4) {
    starImage = <img className="reviewListItem-fourStar" src="grubhub4star.png" alt="4star"></img>
  } else if (numStars === 5) {
    starImage = <img className="reviewListItem-fiveStar" src="grubhub5star.png" alt="5star"></img>
  }

  //Check to see if date is within the last 30 days
  let todaysDate = new Date();
  let reviewDate = new Date(props.review.date);
  let daysBetween = (todaysDate.getTime() - reviewDate.getTime())/(1000*60*60*24.0);
  //then display the date differently based on if it is within the past 31 days or not
  let dateDisplay;
  if (daysBetween <= 31) {
    dateDisplay = moment(props.review.date).fromNow();
  } else {
    dateDisplay = moment(props.review.date).format('MMM Do, YYYY');
  }
  
  //Ordered items
  let ordered;
  if (props.review.Ordered.length > 0) {
    ordered = <div><div className="reviewListItem-nameOrdered">{props.review.user.firstName} ordered:</div> {props.review.Ordered.map(function(order, index) {
      return <OrderItem order={order} key={index}/>
    })}</div>
  }

  return (
    <div className="reviewListItem-body">
      <div className="reviewListItem-header">
        <div className="reviewListItem-avatar">{props.review.user.firstLetter}</div>
        <div className="reviewListItem-userInfo">
          <div className="reviewListItem-nameAndDate">
            <div className="reviewListItem-firstName">{props.review.user.firstName}</div>
            <div className="reviewListItem-date">{dateDisplay}</div><br />
          </div>
          {reviewImage}
          <div className="reviewListItem-reviewStatus">{reviewStatus}</div><br />
        </div>
      </div>
      {starImage}
      <div className="reviewListItem-comments">{props.review.comments}</div><br />
      <div className="reviewListItem-orderList">{ordered}</div><br/>
    </div>
  )
}

export default ReviewListItem;