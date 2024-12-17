// Import the Express framework to create the server
const express = require('express');
const app = express(); // Initialize the Express application

// Import Mongoose to interact with MongoDB
const mongoose = require("mongoose");

// MongoDB connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/ProductHub";

// Connect to the MongoDB database
main()
    .then((res) => {
        // Log a success message if the connection is successful
        console.log("Connected to DB");
    })
    .catch((err) => {
        // Log an error message if the connection fails
        console.log(err);
    });

// Function to handle the MongoDB connection using Mongoose
async function main() {
    // Connect to the MongoDB database
    await mongoose.connect(MONGO_URL);
}

// Define a route for the root path ('/')
// This will handle all requests to the root and send a response
app.use('/', (req, res) => {
    res.send("You Contacted root Path"); // Send a simple message as a response
});

// Define the port number for the server to listen on
const port = 5000;

// Start the Express server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
