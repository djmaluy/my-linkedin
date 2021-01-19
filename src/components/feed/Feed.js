import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOption from "./inputOption/InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./inputOption/posts/Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: inputValue,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="New post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            photoUrl={photoUrl}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
