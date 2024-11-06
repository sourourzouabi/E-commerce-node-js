// Import required modules
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Connect to the database
connection();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}));
app.use(bodyParser.json());

// Define your schema and model
const formDataSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    startDate: Date,
    endDate: Date,
    contract: String,
    dailyPrice: Number,
    theftProtection: String,
    contractTerms: String,
    duration: Number // Add duration field to the schema
});

const FormData = mongoose.model('FormData', formDataSchema);

// Define your API endpoint to handle form submission
app.post('/api/formdata', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Define port
const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
