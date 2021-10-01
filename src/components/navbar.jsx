import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <span className="logo">MiniBlog</span>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
