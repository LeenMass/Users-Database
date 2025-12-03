import { useEffect, useState } from "react";

const Todo = (props) => {
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
      {props.data?.title}
      <br />

      <strong>Completed:</strong>
      {props.mark ? (
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
            onClick={props.clickBtn}
          >
            Mark completed
          </button>
        </>
      )}
    </div>
  );
};
export default Todo;
