const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  wpm: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
  totalCharacters: {
    type: Number,
    required: true,
  },
  errorsCount: {
    type: Number,
    required: true,
  },
  durationSeconds: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('TestResult', testResultSchema);
