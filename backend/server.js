const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const { MongoMemoryServer } = require('mongodb-memory-server');

// Database connection
const startServer = async () => {
  try {
    let MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      console.log('No MONGODB_URI found, starting in-memory MongoDB...');
      const mongoServer = await MongoMemoryServer.create();
      MONGODB_URI = mongoServer.getUri();
    }

    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to MongoDB at ${MONGODB_URI}`);

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/tests', testRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();
