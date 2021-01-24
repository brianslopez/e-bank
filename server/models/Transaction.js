// dependency
const {
    Schema,
    model
  } = require('mongoose');
  
  // create Schema
  const transactionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    oldbalance: {
      type: Number,
      required: true
    },
    newbalance: {
        type: Number,
        required: true
    }
  });
  
const Transaction = model('Transaction', transactionSchema);
  
module.exports = Transaction;