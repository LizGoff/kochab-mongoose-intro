const express = require('express');
// const bodyParser = require('body-parser');
const PORT = process.envPORT || 5000;
const app = express();
const mongoose = require('mongoose');

// files go here

// eg. const books = require('./modules/booksArray');
const Book = require('./models/book.schema');


// -------------- Connecting to Mongo start --------------- //

const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connection', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
});

// ------------- Connecting to Mongo end ----------------- //


// Get route for /books
app.get('/books', (req, res) => {

// ------- database read or find ------ //

    Book.find({})
        .then((dataFromTheDatabase) => {
        // success and good things happen    
            console.log('data from database', dataFromTheDatabase);
            res.send(dataFromTheDatabase);

        })
        // error and bad things happen. make sure to put this in
        // or it may be a security risk as the client can see
        // the error with your code

        .catch((error) => {
            console.log('error with Book.find', error);
            res.sendStatus(500);
        });

});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});