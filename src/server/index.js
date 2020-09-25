const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

dotenv.config();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

// simple route
app.get('/',
  (req, res) => {
    res.json({
      message: '',
    });
  }
);

require('./routes/revenue.route')(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
