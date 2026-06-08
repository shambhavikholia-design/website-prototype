const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');

// GET /api/standards — returns all standards
router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.standards });
});

// GET /api/standards/:id — returns a single standard by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const standard = otherData.standards.standards.find((s) => s.id === id);

  if (!standard) {
    return res.status(404).json({ success: false, error: 'Standard not found.' });
  }

  res.json({ success: true, data: standard });
});

module.exports = router;    