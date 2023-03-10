const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

dotenv.config();

const connect = async ()=> {
    await mongoose.connect('mongodb://mongo:27017/Movie_booking');
}

module.exports = {
    connect,
    PORT:process.env.PORT,
    JWT_KEY:process.env.JWT_KEY,
}