const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');

// GET /api/contact — returns contact page data
router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.contact });
});

// POST /api/contact/submit — handles contact form submission
router.post('/submit', (req, res) => {
  const { name, email, organization, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  // In production this would send an email or save to a DB
  console.log('Contact form submission:', { name, email, organization, message });

  res.json({ success: true, message: 'Your message has been received. We will get back to you shortly.' });
});

module.exports = router;