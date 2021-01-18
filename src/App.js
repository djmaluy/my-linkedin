import React, { useEffect } from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profileURL,
          })
        );
      } else {
        //user is logout
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
