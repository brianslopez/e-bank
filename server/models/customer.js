const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  customer_Id: String,
});

module.exports = mongoose.model("Customer", customerSchema);