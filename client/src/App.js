// imports ================================>

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// application =========================================>

const client = new ApolloClient({
  uri: "https://guarded-thicket-19654.herokuapp.com/",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="page-container">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

// exports =====================================>

export default App;
