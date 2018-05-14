const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const path = require('path');
const http = require('http');
const app = express();
require('dotenv').config();

const postRoutes = require('./server/routes/post');
const userRoutes = require('./server/routes/users');

// Ave atque vale
app.use(favicon(path.join(__dirname, 'dist/favicon.ico')));

const mongoose = require('mongoose');
const connectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CONNECTION}`;
mongoose.connect(connectionString);
// API file for interacting with MongoDB


// Default engine supports regular HTML
app.set('view engine', 'ejs');

// Parser for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Allows for cross origin resource sharing since our Mongo may or may not be one the same serving machine
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows for requests from any domain.
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);

// API locations
app.all('*', function (req, res) {
  res.redirect('/'); // Redirect to main screen if invalid path given
});

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on :${port}`));
