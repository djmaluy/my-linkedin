import React from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt=""
      />
      <LoginForm />
    </div>
  );
}

export default Login;
