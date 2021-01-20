import React from "react";

const FormInputs = ({
  name,
  setName,
  profilePic,
  setProfilePic,
  email,
  setEmail,
  password,
  setPassword,
  loginToApp,
}) => {
  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Full name"
      />
      <input
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
        type="text"
        placeholder="Profile pic URL"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
      />
      <button type="submit" onClick={loginToApp}>
        {" "}
        Sign in
      </button>
    </>
  );
};

export default FormInputs;
