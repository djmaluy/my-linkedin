import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOption from "./inputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="New post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7Fc15E" />
          <InputOption
            Icon={EventAvailableIcon}
            title="Event"
            color="#C0CBCD"
          />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#E7A33E"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
