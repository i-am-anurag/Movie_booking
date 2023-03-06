const express = require('express');
const {checkValidUser} = require('../middleware/auth');
const movieController = require('../controller/movie');

const router = express.Router();

router.post('/create',checkValidUser,movieController.createMovie);
router.patch('/review/:id',checkValidUser,movieController.userReview);

module.exports = router;