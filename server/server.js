// const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');

// files go here

// eg. const books = require('./modules/booksArray');
const Book = require('./models/book.schema');

const bookRouter = require('./routes/book.route');


// -------------- Connecting to Mongo start --------------- //
// move this connection to modules/database-connection.js

const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connection', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
});

// ------------- Connecting to Mongo end ----------------- //

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});