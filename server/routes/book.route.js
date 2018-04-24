const express = require('express');
const router = express.Route();


// move route to /routes/book.route.js

// Get route for /books
router.get('/books', (req, res) => {

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
    
    module.exports = router;