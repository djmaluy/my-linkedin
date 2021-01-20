import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./inputOption/posts/Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import AddNewPostInput from "./AddNewPostInput";

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
      <AddNewPostInput
        sendPost={sendPost}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />

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
