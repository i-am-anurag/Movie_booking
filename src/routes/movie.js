const express = require('express');
const {checkValidUser} = require('../middleware/auth');
const movieController = require('../controller/movie');

const router = express.Router();

router.post('/create',checkValidUser,movieController.createMovie);

module.exports = router;