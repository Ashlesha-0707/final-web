const express = require("express");
const router = express.Router();

const User = require("../models/User");


// REGISTER USER
router.post("/register", async (req, res) => {

    try {

        const user = new User(req.body);
        await user.save();

        res.send("User Registered Successfully");

    } catch (error) {

        res.send(error);

    }

});


// LOGIN USER
router.post("/login", async (req, res) => {

    try {

        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if (user) {

            res.send(user);

        } else {

            res.send("Invalid Email or Password");

        }

    } catch (error) {

        res.send(error);

    }

});

module.exports = router;