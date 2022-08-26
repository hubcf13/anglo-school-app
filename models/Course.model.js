const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  }
});

module.exports = model('Course', courseSchema);
