const router = require("express").Router();
const { User} = require("../models/user");
const bcrypt = require("bcrypt");

// Route to handle user registration
router.post("/", async (req, res) => {
    try {
     let  user = new User(req.body);
        // Save user to the database
     		await user.save();

        // Send response
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
