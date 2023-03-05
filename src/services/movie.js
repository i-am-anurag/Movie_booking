const Movie = require('../models/movie');

const createMovie = async(data)=>{
    const movieRecord = await Movie.create(data);

    return movieRecord;
}

const userReview = async(data)=>{
    const userReviewRecord = await Movie.create(data);

    return userReviewRecord;
}

module.exports = {
    createMovie,
    userReview,
}