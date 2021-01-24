// imports ================================>

import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AccountList from "./components/AccountList";
import AddAccount from "./components/AddAccount";

// application =========================================>

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>react-app:</h1>
          <AccountList />
          <AddAccount />
        </div>
      </ApolloProvider>
    );
  } 
}

// exports =====================================>

export default App;
