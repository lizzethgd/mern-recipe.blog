const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 6000;

const cookieParser = require('cookie-parser')

const app = express();

require('dotenv').config();

//to understand the form dates
app.use(express.json())
/* app.use(express.urlencoded({
  extended: true
})) */

app.use(cors());
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/client/build')));

// initialize routes
app.use('/api/user', require('./server/routes/user'));
app.use('/api/recipe', require('./server/routes/recipe'));
app.use('/api/region', require('./server/routes/region'));
app.use('/api/language', require('./server/routes/language'));
app.use('/api/category', require('./server/routes/category'));
app.use('/api/comment', require('./server/routes/comment'));
app.use('/api/like', require('./server/routes/like'));
app.use('/api/favorite', require('./server/routes/favorite'));

// error handling middleware
app.use(function(err, req, res, next){
  console.log(err.message); // to see properties of message in our console
  res.status(422).send({error: err.message});
});

// Database setup
mongoose.connect(process.env.DATABASE, {})
.then(() => { console.log("Conected to mongoDB")})
.catch((err) => console.log(err));

// All other GET requests not handled before will return our React app
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
}); */

app.listen(port, () => {
  console.log(`Server listening for requests at ${port}`);
});