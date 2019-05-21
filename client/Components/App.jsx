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
        //sort data by 'most recent' first
        //TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        // let sortedData = sortReviews(data.data, 'Most recent');
        this.setState({reviewData: data.data})
      })
      .catch(err => console.log('Error getting review data: ',err));
  }

  sortReviews(method) {
    if (method === 'Most recent') {
      //sort this.state.reviewData by date (most recent)
      
    } else if (method === 'Highest rated') {
      //sort this.state.reviewData by starRating
      
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