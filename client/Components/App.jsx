import React from 'react';
import Reviews from './Reviews/Reviews.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: []
    }
  }

  componentDidMount() {

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