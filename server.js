// FILE: backend/server.js
// PURPOSE: Main backend server for FitFuel

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import product routes
const productRoutes = require("./routes/productRoutes");

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ FIXED MongoDB Connection (NO old options)
mongoose.connect("mongodb://localhost:27017/fitfuel")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
});

// Use product routes
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("FitFuel Server Running Successfully");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`FitFuel Server Running on http://localhost:${PORT}`);
});