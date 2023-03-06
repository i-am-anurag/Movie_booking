const asyncHandler = require('../utils/async-handler');
const movieService = require('../services/movie');

const createMovie = asyncHandler(async(req,res)=>{
    const requestData = {...req.body,createdBy:req.user.id};
    const response = await movieService.createMovie(requestData);

    return res.CREATED(response);
});

const userReview = asyncHandler(async(req,res)=>{
    const requestData = {...req.body,...req.params};
    const userId = req.user.id;
    const response = await movieService.userReview(requestData.id,requestData,userId);

    return res.OK(response);
});

const fetchMovies = asyncHandler(async(req, res) =>{
    const requestData = {createdBy: req.user.id };
    const movieRecords = await movieService.fetchOwnMovie(requestData);

    return res.OK(movieRecords);
})
module.exports = {
    createMovie,
    userReview,
    fetchMovies
}