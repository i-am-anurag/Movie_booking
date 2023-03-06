const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
   createdBy:{
    type:mongoose.Types.ObjectId,
    ref:"User",
  },
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    enum: ['male', 'female', 'non-binary'],
    required: true,
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema,'Celebrity');

module.exports = Celebrity;
