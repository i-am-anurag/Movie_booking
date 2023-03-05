const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    movieName: {
        type: String,
        required: true,
    },
    yearOfMovie: {
        type: String,
        required: true,
    },
    Director: {
        type: String,
        required: true,
    },
    MovieCasts: {
        type: [String],
        required: true,
    },
    review:{
        comment:{
            type: String,
        },
        rating:{
            type:Number,
        },
    },
    releaseDate:{
        type: Date,
    }
}, {timestamps: true});


const Movie = mongoose.model('Movie',movieSchema,'Movie');

module.exports = Movie;