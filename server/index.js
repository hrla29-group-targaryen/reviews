const express = require('express')
const path = require('path');
const db = require('../database/index.js');

const app = express()
const port = 3200

app.get('/reviews/:restaurantID', (req, res) => {

  const {restaurantID} = req.params;

  //GET data for one restaurant; i.e. send data back where {restaurantID : restaurantID}
  //TODO

  res.status(200).send(`Restaurant #: ${restaurantID}`)
})

app.use(express.static(path.join(__dirname, '../public')))

app.listen(port, () => console.log(`App is listening on port ${port}!`))