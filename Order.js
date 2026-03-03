const mongoose = require("../db");

const OrderSchema = new mongoose.Schema({

userEmail: String,
products: Array,
total: Number,
date: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Order", OrderSchema);