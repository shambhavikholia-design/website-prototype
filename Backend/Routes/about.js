const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');

// GET /api/about — returns about page data
router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.about });
});

module.exports = router;