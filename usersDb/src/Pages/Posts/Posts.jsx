import { useState, useEffect } from "react";
import { getPostsPerUser } from "./postsUtils";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState(false);
  const [cancel, setCancel] = useState(false);

  const openAddingPostWindow = () => {
    setAddPost(!addPost);
    setCancel(!cancel);
  };
  const addPostToPostsArray = (post) => {
    setPosts([...posts, post]);
  };

  const getAllPosts = async () => {
    try {
      const data = await getPostsPerUser(userId);
      setPosts(data);
    } catch (error) {
      alert("Failed to feching posts");
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <br />
      {!addPost ? (
        <>
          Posts-User {userId}{" "}
          <button
            onClick={openAddingPostWindow}
            style={{ border: "2px solid black" }}
          >
            Add Post
          </button>
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
          userId={userId}
          openAddingPostWindow={openAddingPostWindow}
          addPostToPostsArray={addPostToPostsArray}
        />
      )}
    </>
  );
};
export default Posts;
