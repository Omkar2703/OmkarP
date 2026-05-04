const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    // 1. Pull data out of the request body
    const { name, email, message } = req.body;

    // 2. Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // 3. Create a new document using our Message model
    const newMessage = new Message({ name, email, message });

    // 4. Save it to MongoDB
    await newMessage.save();

    // 5. Send success response back to frontend
    res.status(201).json({ success: true, message: 'Message saved successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

module.exports = router;