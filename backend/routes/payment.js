// server/routes/payment.js
const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// Payment endpoint
router.post('/pay', async (req, res) => {
  try {
    const { participantId, amount } = req.body;
    const payment = new Payment({ participantId, amount, paymentDate: new Date() });
    await payment.save();
    res.status(201).json({ message: 'Payment successful', payment });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
