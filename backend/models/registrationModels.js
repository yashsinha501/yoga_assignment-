const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min:18, max:65 },
  startDate: { type: Date, required: true },
  batch: { type: String, default: Date.now },
  fee: {type:Boolean, default: false}
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
