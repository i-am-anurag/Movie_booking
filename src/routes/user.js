const express = require('express');
const userControllers = require('../controller/user');
const {AuthValidator} = require('../middleware/auth');

const router = express.Router();

router.post('/signup',AuthValidator,userControllers.signup);
router.post('/login',userControllers.login);

module.exports = router;