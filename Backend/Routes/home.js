const express = require('express');
const router = express.Router();
const homeData = require('../Data/homeData');

// GET /api/home — returns all home page data
router.get('/', (req, res) => {
  res.json({ success: true, data: homeData });
});

// GET /api/home/hero — returns only hero section data
router.get('/hero', (req, res) => {
  res.json({ success: true, data: homeData.hero });
});

// GET /api/home/phases — returns phases section data
router.get('/phases', (req, res) => {
  res.json({ success: true, data: homeData.phases });
});

// GET /api/home/flow — returns instrument flow data
router.get('/flow', (req, res) => {
  res.json({ success: true, data: homeData.flow });
});

// GET /api/home/patient-safety — returns patient safety section data
router.get('/patient-safety', (req, res) => {
  res.json({ success: true, data: homeData.patientSafety });
});

// GET /api/home/stats — returns bottom stats bar data
router.get('/stats', (req, res) => {
  res.json({ success: true, data: homeData.stats });
});

module.exports = router;