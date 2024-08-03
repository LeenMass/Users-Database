import React, { useState } from "react";
import { newPostUser } from "../utils";

export default function AddPost(props) {
  const [newPost, setNewPost] = useState({
    userId: props.userId,
    title: "",
    body: "",
  });

  const addNewPost = async () => {
    const { data } = await newPostUser(newPost);
    props.callback(data);
    alert("Adding Post done Successfully");
  };

  return (
    <>
      New Post-User{props.userId}
      <br />
      <div
        style={{
          border: "2px solid black",
          width: "270px",
          marginLeft: "30px",
        }}
      >
        <strong>Title:</strong>{" "}
        <input
          type="text"
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <strong>Body:</strong>{" "}
        <input
          type="text"
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={addNewPost}>Add</button>
        <button onClick={props.func}>Cancel</button>
      </div>
    </>
  );
}
