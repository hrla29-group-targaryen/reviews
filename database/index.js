const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/grubhub_reviews', {useNewUrlParser: true});

const db = mongoose.connection;
db.once('open', ()=> console.log("Database is up and running on 27017"))

module.exports = db;