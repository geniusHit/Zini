require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8011;
require("./dbconnection/connection");
const signupModel = require("./models/signupSchema");
const router = require("./router/route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

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

module.exports = app;

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });