import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import linkedin from "../../images/linkedin.svg";
import avatar from "../../images/avatar.jpeg";
import "./Header.css";
import HeaderOptions from "../headerOptions/HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { auth } from "../../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedin} alt="logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search"></input>
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Job" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={avatar} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
