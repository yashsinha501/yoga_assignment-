// controllers/registrationController.js
const Participant = require('../models/registrationModels');
const Payment = require('../models/paymentModels')
const moment = require('moment');


const registerUser = async (req, res) => {
  try {
    const { name, age, startDate, batch } = req.body;

    if(age<"18" || age>"65"){
      return res.status(400).json({ message:'People Below 18 or above 65 are not allowed' });
    }

    const parsedStartDate = moment(startDate, 'DD/MM/YYYY', true);
    if (!parsedStartDate.isValid()) {
        // Handle the case where the startDate is not a valid date
        return res.status(400).json({ message: 'Invalid startDate format' });
    }

    const registration = new Participant({
      name,
      age,
      startDate: parsedStartDate.toDate(),
      batch,
    });

    await registration.save();

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Participant.find();
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

const editBatch = async (req, res) => {
  try {
    const { batch } = req.body;
    const { _id } = req.params;
    // Find the participant by ID
    console.log(_id,batch);
    const participant = await Participant.findById(_id);
    if (!participant) {
        return res.status(404).json({ message: 'Participant not found' });
      }
      
      // Parse the startDate string into a moment object
      const startDateMoment = moment(participant.startDate);
      
      console.log(participant);
    // Check if the current month is different from the startDate month
    if (moment().format('YYYY-MM') !== startDateMoment.format('YYYY-MM')) {
      // Update the participant's batch
      await Participant.findByIdAndUpdate(_id, { $set: { batch } });
      return res.status(200).json({ message: 'Batch updated successfully' });
    } else {
      return res.status(400).json({ message: 'Cannot change batch within the same month' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteParticipant = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the participant by ID
      const participant = await Participant.findById(id);
  
      // If participant not found, return a 404 response
      if (!participant) {
        return res.status(404).json({ message: 'Participant not found' });
      }
  
      // Delete the participant
      await Participant.findByIdAndDelete(id);
  
      // Return a success response
      return res.status(200).json({ message: 'Participant deleted successfully' });
    } catch (error) {
      // Log the error and return a 500 response for internal server error
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

module.exports = {
  registerUser,
  getAllRegistrations,
  editBatch,
  deleteParticipant,
};
