const Todo = ({ data, mark, clickBtn }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "420px",
        margin: "20px",
        textAlign: "left",
      }}
    >
      <strong>Title:</strong>
      {data?.title}
      <br />

      <strong>Completed:</strong>
      {mark ? (
        "True"
      ) : (
        <>
          False
          <button
            style={{
              border: "2px solid black",
              width: "200px",
              height: "34px",
              padding: "4px",
              marginBottom: "5px",
              marginLeft: "94px",
            }}
            onClick={clickBtn}
          >
            Mark completed
          </button>
        </>
      )}
    </div>
  );
};
export default Todo;
