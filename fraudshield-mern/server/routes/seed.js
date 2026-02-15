const express = require('express');
const User = require('../models/User');
const Report = require('../models/Report');

const router = express.Router();

// Seed demo data
router.post('/seed', async (req, res) => {
  try {
    // Create demo user
    const demoUser = await User.findOne({ email: 'demo@fraudshield.com' });
    
    if (!demoUser) {
      const newUser = new User({
        name: 'Demo User',
        email: 'demo@fraudshield.com',
        password: 'demo123',
        phone: '9876543210',
      });
      await newUser.save();
    }

    const user = await User.findOne({ email: 'demo@fraudshield.com' });

    // Create sample reports
    const reports = [
      {
        userId: user._id,
        title: 'Phishing Email from Fake Bank',
        description: 'Received phishing email pretending to be from ICICI Bank asking to verify account.',
        category: 'phishing',
        severity: 'high',
        status: 'resolved',
      },
      {
        userId: user._id,
        title: 'Fake Online Shopping Store',
        description: 'Scam website selling products at unrealistic prices. Payment processed but items not delivered.',
        category: 'fraud',
        severity: 'high',
        status: 'under-review',
      },
      {
        userId: user._id,
        title: 'SIM Swap Attack Attempted',
        description: 'Unknown person tried to transfer my phone number using fake ID. Bank blocked the request.',
        category: 'identity-theft',
        severity: 'critical',
        status: 'resolved',
      },
      {
        userId: user._id,
        title: 'Ransomware Attack on Business Network',
        description: 'Malicious file in email encrypted company data. Hackers demanding payment.',
        category: 'malware',
        severity: 'critical',
        status: 'under-review',
      },
      {
        userId: user._id,
        title: 'Fake OTP SMS for Payment Authorization',
        description: 'Received SMS asking to confirm OTP for payment. Did not initiate any transaction.',
        category: 'fraud',
        severity: 'medium',
        status: 'pending',
      },
      {
        userId: user._id,
        title: 'Dating App Romance Scam',
        description: 'Met person on dating app, asked for money for emergency. Never sent any.',
        category: 'fraud',
        severity: 'medium',
        status: 'resolved',
      },
    ];

    // Delete existing reports for demo user (avoid duplicates)
    await Report.deleteMany({ userId: user._id });

    // Create new reports
    for (const report of reports) {
      const newReport = new Report(report);
      await newReport.save();
    }

    res.json({ 
      message: 'Demo data seeded successfully',
      user: { 
        email: user.email, 
        password: 'demo123',
        reportsCreated: reports.length 
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding data', error: error.message });
  }
});

module.exports = router;
