const mongoose = require('mongoose');
const Participant =  require("../models/registrationModels.js")

const paymentSchema = new mongoose.Schema({
  CardNumber: { type: Number, required: true, maxlength: 16 },
  expiryDate: { type: Date, required: true},
  cardType: { type: String, required: true },
  cvv: { type: Number,required: true, maxlength: 4 },
});

const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;
