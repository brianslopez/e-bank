import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
}); 

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className = "page-container">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/accounts/:id" component={Detail} />
            </Switch>
            <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
