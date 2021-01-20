import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import linkedin from "../../images/linkedin.svg";

function Logo() {
  return (
    <div className="header__left">
      <img src={linkedin} alt="logo" />
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search"></input>
      </div>
    </div>
  );
}

export default Logo;
