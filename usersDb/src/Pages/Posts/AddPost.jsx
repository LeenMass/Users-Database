import { useState } from "react";
import { newPostUser } from "./postsUtils";

const AddPost = ({ openAddingPostWindow, userId, addPostToPostsArray }) => {
  const [newPost, setNewPost] = useState({
    userId: userId,
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const addNewPost = async () => {
    try {
      const { data } = await newPostUser(newPost);
      addPostToPostsArray(data);
      alert("Adding Post done Successfully");
    } catch (error) {
      alert("Failed to add new post");
    }
  };
  return (
    <>
      New Post-User{userId}
      <br />
      <div
        style={{
          border: "2px solid black",
          width: "270px",
          marginLeft: "30px",
          display: "flex",
          marginTop: "6px",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <strong>Title:</strong>{" "}
        <input type="text" name="title" onChange={handleChange} />
        <strong>Body:</strong>{" "}
        <input type="text" name="body" onChange={handleChange} />
        <div>
          <button onClick={addNewPost}>Add</button>
          <button onClick={openAddingPostWindow}>Cancel</button>
        </div>
      </div>
    </>
  );
};
export default AddPost;
