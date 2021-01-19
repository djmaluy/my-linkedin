import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticle = (title, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newArticle("test for test", " redux test test")}
      {newArticle("test for test", " test test test")}
      {newArticle("test for test", " test test test")}
      {newArticle("test for test", " test test test")}
      {newArticle("test for test", " test test test")}
    </div>
  );
}

export default Widgets;
