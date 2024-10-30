import React from "react";
import "./SecondRow.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp";
import PercentIcon from "@mui/icons-material/Percent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const SecondRow = ({ onSearch }) => {
  return (
    <div className="header-second-row">
      <div className="leftCorner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="logo-image" />
          </Link>
        </div>
        <div className="searchBar">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      <div className="rightCorner">
        <div className="deals-link">
          <div className="percent-icon-container">
            <PercentIcon
              className="percent-icon"
              style={{ fontSize: "12px" }}
            />
          </div>
          <Link to="/deals" className="deals-text">
            Best Deals
          </Link>
        </div>
        <Link to="/location">
          <LocationOnOutlinedIcon style={{ color: "black" }} />
        </Link>
        <Link to="/favourites">
          <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
        </Link>
        <Link to="/cart">
          <ShoppingCartOutlinedIcon style={{ color: "black" }} />
        </Link>
        <Link to="/signup">
          Login{`  `}
          {"/"} Register
        </Link>
      </div>
    </div>
  );
};

export default SecondRow;
