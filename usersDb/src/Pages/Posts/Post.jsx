const Post = ({ data }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "20px",
      }}
    >
      <strong>Title:</strong>
      {data.title}
      <br />

      <strong>Body:</strong>
      {data.body}
    </div>
  );
};
export default Post;
