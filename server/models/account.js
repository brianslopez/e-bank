// requirments =================================>

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model =======================================>

const accountSchema = new Schema({
  name: String,
  ballance: Number,
  customer_id: String,
});

// exports =====================================>

module.exports = mongoose.model("Account", accountSchema);
