import React from 'react';
import './reviewHeader.css';

const ReviewHeader = (props) => {
  let numOfRatings;
  let stars;
  let good;
  let timely;
  let correct;
  if (props.restaurantData.ratings) {
    numOfRatings = props.restaurantData.ratings.number
    stars = props.restaurantData.ratings.stars
    good = props.restaurantData.ratings.good
    timely = props.restaurantData.ratings.timely
    correct = props.restaurantData.ratings.correct
  }

  let starImage;
  let randomStarNum = Math.ceil(Math.random()*2)
  if (randomStarNum === 1) {
    starImage = <img className="reviewHeader-fourStar" src="grubhub4star.png" alt="4star"></img>
  } else if (randomStarNum === 2) {
    starImage = 'Add new star image'
  }


  return (
    <div className="reviewHeader-main">
      <h3 className="reviewHeader-title">Reviews for {props.restaurantData.name}</h3>
      <div>{starImage}</div>
      <div>{numOfRatings} ratings</div>
      <div>Here's what people are saying:</div>
      <ul>
        <li>
          <span className="reviewHeader-ratings">{good}%</span>
          <span className="reviewHeader-caption">Food was good</span>
        </li>
        <li>
          <span className="reviewHeader-ratings">{timely}%</span>
          <span className="reviewHeader-caption">Delivery was on time</span>
        </li>
        <li>
          <span className="reviewHeader-ratings">{correct}%</span>
          <span className="reviewHeader-caption">Order was accurate</span>
        </li>
      </ul>
    </div>
  )
}

export default ReviewHeader;