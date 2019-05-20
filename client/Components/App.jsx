import React from 'react';
import ReviewList from './ReviewList/ReviewList.jsx';
import Footer from './Footer/Footer.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: []
    }
    this.getReviewsForRestaurantID = this.getReviewsForRestaurantID.bind(this);
  }

  componentDidMount() {
    this.getReviewsForRestaurantID();
  }

  getReviewsForRestaurantID() {
    let url = window.location.href;
    axios.get(url+'api/reviews')
      .then( data => {
        this.setState({reviewData: data.data})
      })
      .catch(err => console.log('Error getting review data: ',err));
  }

  render() {
    return (
      <div>
        <ReviewList reviewData={this.state.reviewData}/>
        <Footer />
      </div>
    )
  }
}

export default App;