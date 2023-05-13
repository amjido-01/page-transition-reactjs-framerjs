import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div style={{marginBottom: "50px"}}>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home page</Link>
          </li>
          <li>
            <Link to="/about">About use</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
