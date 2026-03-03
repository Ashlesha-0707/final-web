const mongoose = require("../db");

const UserSchema = new mongoose.Schema({

name: String,
email: String,
password: String,
role: { type: String, default: "user" }

});

module.exports = mongoose.model("User", UserSchema);