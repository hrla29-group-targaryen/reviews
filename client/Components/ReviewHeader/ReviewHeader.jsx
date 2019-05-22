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
  if (stars === 5) {
    starImage = <img className="reviewHeader-fiveStar" src="grubhub5star.png" alt="5star"></img>
  } 
  else if (stars === 4.5) {
    starImage = <img className="reviewHeader-fourhalfStar" src="grubhub4.5star.png" alt="4.5star"></img>
  }
  else if (stars === 4) {
    starImage = <img className="reviewHeader-fourStar" src="grubhub4star.png" alt="4star"></img>
  }
  else if (stars === 3.5) {
    starImage = <img className="reviewHeader-threehalfStar" src="grubhub3.5star.png" alt="3.5star"></img>
  }
  else if (stars === 3) {
    starImage = <img className="reviewHeader-threeStar" src="grubhub3star.png" alt="3star"></img>
  }
  else if (stars === 2.5) {
    starImage = <img className="reviewHeader-twohalfStar" src="grubhub2.5star.png" alt="2.5star"></img>
  }
  //No restaurant is rated below 2.5 in our data
  else if (stars === 2) {
    starImage = <img className="reviewHeader-twoStar" src="grubhub2star.png" alt="2star"></img>
  }
  else if (stars === 1.5) {
    starImage = '1.5 stars'
  }
  else if (stars === 1) {
    starImage = <img className="reviewHeader-oneStar" src="grubhub1star.png" alt="1star"></img>
  }


  return (
    <div className="reviewHeader-main">
      <h3 className="reviewHeader-title">Reviews for {props.restaurantData.name}</h3>
      <div>{starImage}</div>
      <div className="reviewHeader-numOfRatings">{numOfRatings} ratings</div>
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