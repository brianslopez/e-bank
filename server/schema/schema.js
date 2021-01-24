// imports =====================================>

const graphql = require("graphql");
const Account = require("../models/account");
const Customer = require("../models/customer");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

// object types ================================>

const AccountType = new GraphQLObjectType({
  name: "Account",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
    customer: {
      type: CustomerType,
      resolve(parent, args) {
        return Customer.findById(parent.customer_id);
      },
    },
  }),
});

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    accounts: {
      type: new GraphQLList(AccountType),
      resolve(parent, args) {
        return Account.find({ customer_id: parent.id });
      },
    },
  }),
});

// queries =====================================>

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    account: {
      type: AccountType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Account.findById(args.id);
      },
    },
    customer: {
      type: CustomerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Customer.findById(args.id);
      },
    },
    accounts: {
      type: new GraphQLList(AccountType),
      resolve(parent, args) {
        return Account.find({});
      },
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parent, args) {
        return Customer.find({});
      },
    },
  },
});

// mutations ===================================>

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCustomer: {
      type: CustomerType,
      args: {
        first_name: { type: new GraphQLNonNull(GraphQLString) },
        last_name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let customer = new Customer({
          first_name: args.first_name,
          last_name: args.last_name,
          username: args.username,
          password: args.password,
        });
        return customer.save();
      },
    },
    addAccount: {
      type: AccountType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        balance: { type: new GraphQLNonNull(GraphQLInt) },
        customer_id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let account = new Account({
          name: args.name,
          balance: args.balance,
          customer_id: args.customer_id,
        });
        return account.save(args.id);
      },
    },
    updateAccount: {
      type: AccountType,
      args: {
        id: { type: GraphQLID },
        balance: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Account.findByIdAndUpdate(args.id, { balance: args.balance });
      },
    },
    deleteAccount: {
      type: AccountType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Account.findByIdAndDelete(args.id);
      },
    },
  },
});

// exports =====================================>

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
