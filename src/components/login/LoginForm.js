import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { login } from "../../redux/userSlice";
import FormInputs from "./FormInputs";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      alert("Enter full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.name,
                photoUrl: userAuth.user.profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <form>
        <FormInputs
          name={name}
          setName={setName}
          profilePic={profilePic}
          setProfilePic={setProfilePic}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loginToApp={loginToApp}
        />
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </>
  );
}

export default LoginForm;
