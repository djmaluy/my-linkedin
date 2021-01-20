import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import RecentItem from "./RecentItem";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1609075833903-7de82d17fdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="background"
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}{" "}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">321</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <RecentItem />
      </div>
    </div>
  );
}

export default Sidebar;
