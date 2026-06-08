const express = require('express');
const router = express.Router();
const homeData = require('../Data/homeData');


router.get('/', (req, res) => {
  res.json({ success: true, data: homeData });
});


router.get('/hero', (req, res) => {
  res.json({ success: true, data: homeData.hero });
});

router.get('/phases', (req, res) => {
  res.json({ success: true, data: homeData.phases });
});


router.get('/flow', (req, res) => {
  res.json({ success: true, data: homeData.flow });
});


router.get('/patient-safety', (req, res) => {
  res.json({ success: true, data: homeData.patientSafety });
});


router.get('/stats', (req, res) => {
  res.json({ success: true, data: homeData.stats });
});

module.exports = router;
