const express = require("express");
const router = express.Router();

// Import model
const Product = require("../models/Product");

// TEST ROUTE
router.get("/test", (req, res) => {
    res.send("Product route working");
});

// ADD PRODUCT
router.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;