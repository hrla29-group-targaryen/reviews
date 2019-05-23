import React from 'react';
import ReviewListItem from './ReviewListItem/ReviewListItem.jsx';
import faker from 'faker';
import './reviewList.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMethod: 'Most recent'
    }
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(e) {
    let sortMethod = e.target.value;
    this.props.sortReviews(sortMethod);
    this.setState({sortMethod})
  }

  render() {
    let randomCity = faker.address.city();
    let neighborhoods = ['Mid-City West', 'Downtown', 'View Park', 'Westmont', 'Mount Washington',
    'Monterey Hills', 'Mar Vista', 'Lincoln Heights', 'Eagle Rock', 'Union Square', 'South Village',
    'East Harbor'];
    let randomNeighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];

    return (
      <div>
        <div className="reviewList-main">
          <div className="reviewList-sort">
            <div className="reviewList-sortText">Sort by:</div>
            <div className="reviewList-select">
              <select className="reviewList-selectBox" onChange={this.handleSortChange}>
                <option value="Most recent">Most recent</option>
                <option value="Highest rated">Highest rated</option>
              </select>
              <img className="reviewList-dropdownArrow" src="grubhubDropdownArrow.png" alt="dropdownArrow"></img>
            </div>
          </div><br/>
          {this.props.reviewData.map(function (item, index) {
            return <ReviewListItem review={item} key={index} />
          })}
          <div className="reviewList-buttonContainer">
            <button className="reviewList-viewAllButton">View all reviews</button>
          </div>
          <div className="reviewList-bottom">
            <a className="reviewList-a" href="">Grubhub</a> / 
            <a className="reviewList-a" href="">{randomCity}</a> / 
            <a className="reviewList-a" href="">{randomNeighborhood}</a> / 
            <span className="reviewList-restaurantName">{this.props.restaurantData.name}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewList;