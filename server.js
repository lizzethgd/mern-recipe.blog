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
app.use(express.static(path.join(__dirname, '/client/build')));

app.use(cors());
app.use(cookieParser())


//app.use(express.urlencoded({extended: false})) 

// initialize routes
app.use('/user', require('./server/routes/user'));
app.use('/recipe', require('./server/routes/recipe'));
app.use('/region', require('./server/routes/region'));
app.use('/language', require('./server/routes/language'));
app.use('/category', require('./server/routes/category'));
app.use('/comment', require('./server/routes/comment'));
app.use('/like', require('./server/routes/like'));
app.use('/favorite', require('./server/routes/favorite'));

// error handling middleware
app.use(function(err, req, res, next){
  console.log(err.message); // to see properties of message in our console
  res.status(422).send({error: err.message});
});

// Database setup
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => { console.log("Conected to mongoDB")})
//.catch((err) => console.log(err));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening for requests at ${port}`);
});