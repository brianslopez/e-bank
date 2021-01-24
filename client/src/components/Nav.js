// imports =====================================>

import React from "react";
import { Link } from "react-router-dom";

// application =================================>

function Nav() {
  return (
    <header className="header">
      <h2 className="header-name">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="header-text">REACT-LEDGER</span>
        </Link>
      </h2>
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-element">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="nav-text">Signup</span>
            </Link>
          </li>
          <li className="nav-element">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="nav-text">Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// exports =====================================>

export default Nav;
