const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

_id: Number,
restaurantID: Number,
user: {
    firstName: String,
    firstLetter: String,
    numOfRatings: Number,
    topReviewer: Boolean,
    },
starRating: Number,
comments: String,
date: Date,
Ordered: [String]
})

const ReviewList = mongoose.model('reviewLists', reviewSchema);

module.exports.ReviewList = ReviewList;