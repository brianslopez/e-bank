const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.ATLAS_URI || 'mongodb://localhost/ebank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;