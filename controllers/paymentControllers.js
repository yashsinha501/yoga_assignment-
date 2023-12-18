const Payment = require('../models/paymentModels');


const completePayment = async (req, res) => {
  try {
    const { cardNumber, expiryDate, cardType, cvv } = req.body;


    const payment = new Payment({
      cardNumber,
      expiryDate,
      cardType,
      cvv,
      userid,
    });

    await payment.save();

    res.status(201).json({ message: 'Payment successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};



module.exports = completePayment;