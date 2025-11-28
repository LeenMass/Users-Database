const Post = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "20px",
      }}
    >
      <strong>Title:</strong>
      {props.data.title}
      <br />

      <strong>Body:</strong>
      {props.data.body}
    </div>
  );
};
export default Post;
