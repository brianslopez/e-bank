import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div class = "page-container">
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
  );
}

export default App;
