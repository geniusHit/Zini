const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // Fallback to port 5000 if not defined
require("./dbconnection/connection");
const signupModel = require("./models/signupSchema");
const router = require("./router/route");

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register routes
app.use(router);

// Route to handle user sign-in by mobile number
app.get("/signin/:mobile", async (req, res) => {
    try {
        const mob = req.params.mobile;
        const result = await signupModel.findOne({ mobile: mob });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});