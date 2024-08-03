import React, { useState, useEffect } from "react";
import { getPostsPerUser } from "../utils";
import Post from "./Post";
import AddPost from "./AddPost";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState(false);
  const [cancel, setCancel] = useState(false);

  const addPostWindow = () => {
    setAddPost(!addPost);
    setCancel(!cancel);
  };
  const postsCallback = (post) => {
    setPosts([...posts, post]);
  };
  const getAllPosts = async () => {
    const { data } = await getPostsPerUser(props.userId);
    setPosts(data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <br />
      {!addPost ? (
        <>
          Posts-User {props.userId} <button onClick={addPostWindow}>Add</button>
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              marginLeft: "133px",
            }}
          >
            {posts.map((post) => {
              return <Post data={post} key={post.id} />;
            })}
          </div>
        </>
      ) : (
        <AddPost
          userId={props.userId}
          func={addPostWindow}
          callback={postsCallback}
        />
      )}
    </>
  );
}
