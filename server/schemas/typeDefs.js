const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    accounts: [Account]
  }

  type Account {
    _id: ID
    name: String
    balance: Float
    user: User
    transactions: [Transaction]
  }

  type Transaction {
    _id: ID
    name: String
    oldbalance: Float
    newbalance: Float
    account: Account
  }

  type Query {
    me: User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;