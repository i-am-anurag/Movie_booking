const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

dotenv.config();

const connect = async ()=> {
    await mongoose.connect('mongodb://localhost/Movie_booking');
}

module.exports = {
    connect,
    PORT:process.env.PORT,
    JWT_KEY:process.env.JWT_KEY,
}