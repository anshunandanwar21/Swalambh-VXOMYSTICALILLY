const express = require('express');
const Report = require('../models/Report');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create a report
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, category, severity, location, attachment } = req.body;

    const report = new Report({
      userId: req.userId,
      title,
      description,
      category,
      severity,
      location,
      attachment,
    });

    await report.save();
    res.status(201).json({ message: 'Report created successfully', report });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all reports for a user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a specific report
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const report = await Report.findOne({ _id: req.params.id, userId: req.userId });
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update report status
router.put('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    res.json({ message: 'Report updated', report });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
