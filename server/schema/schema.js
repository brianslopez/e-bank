// dependancies =================================>

const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
} = graphql;

// object types =================================>

const AccountType = new GraphQLObjectType({
  name: "Account",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    ballance: { type: GraphQLInt },
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
  },
});

// exports =====================================>

module.exports = new GraphQLSchema({
  query: RootQuery,
});
