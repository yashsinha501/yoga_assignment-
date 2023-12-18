const express = require('express');
const router = express.Router();
const paymentControllers = require('../controllers/paymentControllers');

// Define registration routes
router.post('/payment', paymentControllers.completePayment);

module.exports = router;
