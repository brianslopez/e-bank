// requirments =================================>

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model =======================================>

const customerSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
});

// exports =====================================>

module.exports = mongoose.model("Customer", customerSchema);