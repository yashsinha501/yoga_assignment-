const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationControllers');

// Define registration routes
router.post('/register', registrationController.registerUser);
router.get('/registrations', registrationController.getAllRegistrations);
router.put('/register/:_id', registrationController.editBatch);
router.delete('/delete/:id', registrationController.deleteParticipant);

module.exports = router;
