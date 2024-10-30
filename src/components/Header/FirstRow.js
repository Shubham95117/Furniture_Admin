// FirstRow.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const FirstRow = () => {
  return (
    <div className="header-first-row">
      <div className="container">
        <ul>
          <li>
            <Link to="/franchise-inquiry">Franchise Inquiry </Link>
          </li>{" "}
          |
          <li>
            <Link to="/warranty-registration">Warranty Registration </Link>
          </li>{" "}
          |
          <li>
            <Link to="/track-order">Track Order </Link>
          </li>{" "}
          |
          <li>
            <Link to="/our-store">Our Store</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstRow;
