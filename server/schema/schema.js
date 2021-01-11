// dependancies =================================>

const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = graphql;

// object types =================================>

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
        // database code
      },
    },
  }),
});

const AccountType = new GraphQLObjectType({
  name: "Account",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    ballance: { type: GraphQLInt },
    customer: {
      type: CustomerType,
      resolve(parent, args) {
        // database code
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
        //code to get data from database
      },
    },
    customer: {
      type: CustomerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from database
      },
    },
    accounts: {
      type: new GraphQLList(AccountType),
      resolve(parent, args) {
        return books;
      },
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parent, args) {
        return customers;
      },
    },
  },
});

// exports =====================================>

module.exports = new GraphQLSchema({
  query: RootQuery,
});
