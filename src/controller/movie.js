const asyncHandler = require('../utils/async-handler');
const movieService = require('../services/movie');
const createMovie = asyncHandler(async(req,res)=>{
    const requestData = {...req.body,createdBy:req.user.id};
    const response = await movieService.createMovie(requestData);

    return res.CREATED(response);
});

module.exports = {
    createMovie,
}