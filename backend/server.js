const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./config/database')
const registerRoutes = require('./routes/registrationRoutes')
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors())


app.use('/api',registerRoutes)

// Routes
// const enrollmentRoutes = require('./routes/enrollment');
// const paymentRoutes = require('./routes/payment');
// const batchRoutes = require('./routes/batch');
// app.use('/api/enrollment', enrollmentRoutes);
// app.use('/api/payment', paymentRoutes);
// app.use('/api/batch', batchRoutes);

// Connect to MongoDB

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
