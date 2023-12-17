const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  startDate: { type: Date, required: true },
  batch: { type: String, default: Date.now },
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
