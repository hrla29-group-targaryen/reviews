import React from 'react';
import ReviewListItem from './ReviewListItem/ReviewListItem.jsx';
import './reviewList.css';

const ReviewList = (props) => {
  return (
    <div>
      <div className="reviewList-main">
        <div className="reviewList-sort">
          <div className="reviewList-sortText">Sort by:</div>
          <div className="reviewList-select">
            <select className="reviewList-selectBox">
              <option value="0">Most recent</option>
              <option value="1">Highest rated</option>
            </select>
            <img className="reviewList-dropdownArrow" src="grubhubDropdownArrow.png" alt="dropdownArrow"></img>
          </div>
        </div>
        {props.reviewData.map(function (item, index) {
          return <ReviewListItem review={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default ReviewList;