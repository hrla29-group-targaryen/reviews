const express = require('express')
const path = require('path');
const db = require('../database/index.js');
const ReviewList = require ('../database/model.js');

const app = express()
const port = 3200

//serve the client with endpoint restaurant with specific restaurantID
app.use('/restaurants/:restaurantID', express.static(path.join(__dirname, '../public')))

app.get('/restaurants/:restaurantID/api/reviews', (req, res) => {

  const {restaurantID} = req.params;

  //GET data for one restaurant; i.e. send data back where {restaurantID : restaurantID}
  ReviewList.find({restaurantID: restaurantID})
    .then(data => res.status(201).send(data))
    .catch(err => res.status(404).send(err));
})


app.listen(port, () => console.log(`App is listening on port ${port}!`))