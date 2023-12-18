const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://1sinhayash:assignment@cluster0.1oef9ur.mongodb.net/assignment?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
