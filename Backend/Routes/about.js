const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');


router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.about });
});

module.exports = router;
