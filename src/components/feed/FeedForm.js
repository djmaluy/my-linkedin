import React from "react";
import CreateIcon from "@material-ui/icons/Create";

function FeedForm({ setInputValue, inputValue, sendPost }) {
  return (
    <>
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
    </>
  );
}

export default FeedForm;
