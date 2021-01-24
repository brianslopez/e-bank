const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {

  }

  type Account {

  }

  type Transaction {

  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  
  type Mutation {

  }
  
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;