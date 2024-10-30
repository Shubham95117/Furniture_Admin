import React from "react";
import "./Header.css";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
const Header = () => {
  return (
    <div className="header">
      <FirstRow />
      <SecondRow /> <hr />
      <ThirdRow />
    </div>
  );
};

export default Header;
