const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');


router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.resources });
});


router.get('/:category', (req, res) => {
  const { category } = req.params;
  const found = otherData.resources.categories.find(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  );

  if (!found) {
    return res.status(404).json({ success: false, error: 'Category not found.' });
  }

  res.json({ success: true, data: found });
});

module.exports = router;
