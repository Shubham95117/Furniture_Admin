import React from "react";
import "./ThirdRow.css";
import { Link } from "react-router-dom";

const ThirdRow = () => {
  return (
    <div className="header-third-row">
      <nav>
        <ul>
          <li>
            <Link to="/category/living-room">Living Room</Link>
          </li>
          <li>
            <Link to="/category/bed-room">Bed Room</Link>
          </li>
          <li>
            <Link to="/category/dining-room">Dining Room</Link>
          </li>
          <li>
            <Link to="/category/home-office">Home Office</Link>
          </li>
          <li>
            <Link to="/category/kids-furniture">Kids Furniture</Link>
          </li>
          <li>
            <Link to="/category/plastic-chairs">Plastic Chairs</Link>
          </li>
          <li>
            <Link to="/category/utility">Utility</Link>
          </li>
          <li>
            <Link to="/category/premium-plastic">Premium Plastic</Link>
          </li>
          <li>
            <Link to="/category/modular-beds">
              Modular Beds
              <span className="new-tag">New</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ThirdRow;
