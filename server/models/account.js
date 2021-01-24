// dependency
const {
  Schema,
  model
} = require('mongoose');

// create Schema
const accountSchema = new Schema({
  name: {
      type: String,
      required: true,
      trim: true,
  },
  balance: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  transactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Transaction'
  }]
});

const Account = model('Account', accountSchema);

module.exports = Account;