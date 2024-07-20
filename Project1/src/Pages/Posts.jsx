import React, { useState, useEffect } from "react";
import { getPostsPerUser } from "../utils";
import Post from "./Post";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const { data } = await getPostsPerUser(props.userId);
    setPosts(data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div>
      Posts-User {props.userId}
      <br />
      {posts.map((post) => {
        return <Post data={post} key={post.id} />;
      })}
    </div>
  );
}
