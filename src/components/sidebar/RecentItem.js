import React from "react";
import "./Sidebar.css";

function RecentItem() {
  const recentItem = (topic) => (
    <div className="sidebar__resentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <>
      <p>Recent</p>
      {recentItem("React developers")}
      {recentItem("Front-end developers")}
      {recentItem("Linux")}
      {recentItem("ISTQB")}
      {recentItem("Design")}
    </>
  );
}

export default RecentItem;
