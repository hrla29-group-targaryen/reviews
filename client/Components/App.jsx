import React from 'react';
import Reviews from './Reviews/Reviews.jsx';
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
    // axios.get('/reviews/')
  }

  render() {
    return (
      <div>
        <Reviews reviewData={this.state.reviewData}/>
        <Footer />
      </div>
    )
  }
}

export default App;