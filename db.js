const mongoose = require("mongoose");

module.exports = () => {
    // Connection parameters for Mongoose
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        // Attempt to connect to the MongoDB database using the connection parameters
        mongoose.connect("mongodb://localhost:27017");
        console.log("Connected to database successfully");
    } catch (error) {
        // Log any errors that occur during the connection attempt
        console.log(error);
        console.log("Could not connect to the database!");
    }
};
