require("dotenv").config();
require("./dbconnection/connection");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ECommerce backend is working"
    });
});

const port = process.env.PORT || 8011;
const signupModel = require("./models/signupSchema");

app.use(express.urlencoded({ extended: true }));

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

const router = require("./router/route");
app.use(router);

module.exports = app;

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });