const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./config/database')
const registerRoutes = require('./routes/registrationRoutes')
const path = require('path')
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors())


app.use('/api',registerRoutes)

app.use(express.static(path.join(__dirname, './frontend/dist')))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"))
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
