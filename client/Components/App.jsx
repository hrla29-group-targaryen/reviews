import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import Footer from './Footer/Footer.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    }
    this.getReviewsForRestaurantID = this.getReviewsForRestaurantID.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
  }

  componentDidMount() {
    this.getReviewsForRestaurantID();
  }

  getReviewsForRestaurantID() {
    let url = window.location.href;
    axios.get(url+'api/reviews')
      .then( data => {
        this.sortReviews('Most recent', data.data);
      })
      .catch(err => console.log('Error getting review data: ',err));
  }

  sortReviews(method, data = this.state.reviewData) {
    if (method === 'Most recent') {
      let sortedData = data.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      })
      this.setState({reviewData: sortedData})

    } else if (method === 'Highest rated') {
      //sort this.state.reviewData by starRating
      let sortedData = data.sort(function(a,b){
        return b.starRating - a.starRating;
      })
      this.setState({reviewData: sortedData})
    }
  }

  render() {
    return (
      <div>
        <ReviewList reviewData={this.state.reviewData} sortReviews={this.sortReviews}/>
        <Footer />
      </div>
    )
  }
}

export default App;