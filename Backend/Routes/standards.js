const express = require('express');
const router = express.Router();
const otherData = require('../Data/otherData');


router.get('/', (req, res) => {
  res.json({ success: true, data: otherData.standards });
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const standard = otherData.standards.standards.find((s) => s.id === id);

  if (!standard) {
    return res.status(404).json({ success: false, error: 'Standard not found.' });
  }

  res.json({ success: true, data: standard });
});

module.exports = router;    
