const { User, Account, Transaction} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate({
                        path: 'accounts',
                        populate: {
                            path: 'transactions'
                        }
                    });
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        getAccount: async(parent, {accountID}, context) => {
            if(context.user) {
                const accountData = Account.findOne({_id: accountID})
                .populate('transactions');
            
                return accountData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
  
            return {token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({email: email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
  
            const token = signToken(user);
            return {token, user};
        },
        addAccount: async(parent, args, context) => {
            if(context.user) {
                const account = await Account.create(args);
                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$push: {accounts: account._id}}
                );

                return account;
            }

            throw new AuthenticationError('Not logged in');
        },
        addTransaction: async(parent, {accountID, name, oldbalance, newbalance}, context) => {
            if(context.user) {
                const transaction = await Transaction.create({
                    name: name,
                    oldbalance: oldbalance,
                    newbalance: newbalance
                });
                await Account.findOneAndUpdate(
                    {_id: accountID},
                    {$push: {transactions: transaction._id}}
                );

                return transaction;
            }

            throw new AuthenticationError('Not logged in');
        },
        deleteAccount: async(parent, {accountID}, context) => {
            if(context.user) {
                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {accounts: accountID}},
                    {new: true}
                );

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        deleteTransaction: async(parent, {accountID, transactionID}, context) => {
            if(context.user) {
                const account = await Account.findOneAndUpdate(
                    {_id: accountID},
                    {$pull: {transactions: transactionID}},
                    {new: true}
                );

                return account;
            }

            throw new AuthenticationError('Not logged in');
        },
        editAccount: async(parent, {accountID, name, balance}, context) => {
            if(context.user) {
                const account = await Account.findOneAndUpdate(
                    {_id: accountID},
                    {name: name, balance: balance},
                    {new: true}
                );

                return account;
            }

            throw new AuthenticationError('Not logged in');
        },
        editTransaction: async(parent, {transactionID, name, oldbalance, newbalance}, context) => {
            if(context.user) {
                const transaction = await Transaction.findOneAndUpdate(
                    {_id: transactionID},
                    {name: name, oldbalance:oldbalance, newbalance:newbalance},
                    {new: true}
                );

                return transaction;
            }

            throw new AuthenticationError('Not logged in');
        },
    }
};
  
module.exports = resolvers;