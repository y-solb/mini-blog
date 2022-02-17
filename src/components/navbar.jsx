import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="logo">MiniBlog</span>
      </Link>
    </nav>
  );
};

export default Navbar;
