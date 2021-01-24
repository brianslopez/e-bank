const { User, Account, Transaction} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    
};
  
module.exports = resolvers;