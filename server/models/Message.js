const mongoose = require('mongoose');

// Schema defines the SHAPE of data stored in MongoDB
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  }
}, {
  timestamps: true  // auto adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Message', messageSchema);