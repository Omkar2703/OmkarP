const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // loads .env file

const contactRoute = require('./routes/contact');

const app = express();  // creates the Express application

// ─── Middleware ────────────────────────────────────────────────────────────
app.use(cors({
  origin: 'https://omkar-p-6g9k.vercel.app'  // only allow requests from our React app
}));
app.use(express.json());  // parses incoming JSON request bodies

// ─── Routes ────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoute);

// ─── Test route ────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send('Portfolio backend is running ✅');
});

// ─── Connect to MongoDB, then start server ─────────────────────────────────
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });