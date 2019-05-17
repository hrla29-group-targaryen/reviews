const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

_id: {type: Number, required: true},
restaurantID: {type: Number, required: true},
user: {
    firstName: {type: String, required: true},
    firstLetter: {type: String, required: true},
    numOfRatings: {type: Number, required: true},
    topReviewer: {type: Boolean, required: true},
    },
starRating: {type: Number, required: true},
comments: {type: String, required: true},
date: {type: Date, required: true},
Ordered: {type: [String], required: true}
})

const ReviewList = mongoose.model('reviewLists', reviewSchema);

module.exports.ReviewList = ReviewList;