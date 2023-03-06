const Movie = require('../models/movie');
const ErrorResponse = require('../utils/error');
const ErrorCodes = require('../utils/status-code');

const createMovie = async(data)=>{
    const movieRecord = await Movie.create(data);

    return movieRecord;
}


const userReview = async (movieId,reviewData,userId) => {
  const movieRecord = await Movie.findById(movieId);
  console.log(movieRecord);
  if(!movieRecord)
        throw ErrorResponse('Movie not found',ErrorCodes.BAD_REQUESET);

  movieRecord.review.push({
    comment: reviewData.comment,
    rating: reviewData.rating,
    respondTime: new Date(),
  });

  await movieRecord.save();

  return movieRecord;
};

const fetchOwnMovie = async(createdBy)=>{
    console.log("userId is:",createdBy);
    const movieRecord = await Movie.find(createdBy);

    return movieRecord;
}

module.exports = {
    createMovie,
    userReview,
    fetchOwnMovie,
}