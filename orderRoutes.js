const express = require("express");
const router = express.Router();

const Order = require("../models/Order");


// CREATE ORDER
router.post("/create-order", async (req, res) => {

    try {

        const order = new Order(req.body);

        await order.save();

        res.send(order);

    } catch (error) {

        res.send(error);

    }

});


// GET ALL ORDERS
router.get("/orders", async (req, res) => {

    try {

        const orders = await Order.find();

        res.send(orders);

    } catch (error) {

        res.send(error);

    }

});

module.exports = router;