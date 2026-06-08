const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');

router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.contact });
});

router.post('/submit', (req, res) => {
  const { name, email, organization, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }


  console.log('Contact form submission:', { name, email, organization, message });

  res.json({ success: true, message: 'Your message has been received. We will get back to you shortly.' });
});

module.exports = router;
