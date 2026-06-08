const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');

// GET /api/resources — returns all resources
router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.resources });
});

// GET /api/resources/:category — returns resources by category
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