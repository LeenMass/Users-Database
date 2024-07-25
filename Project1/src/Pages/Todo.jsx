import React, { useState } from "react";

export default function Todo(props) {
  const [mark, setMark] = useState(props.data.completed);
  const click = () => {
    setMark(!mark);
    props.func(!mark);
  };
  return (
    <div
      style={{
        border: "2px solid black",
        float: "right",
        textAlign: "left",
        width: "400px",
      }}
    >
      <strong>Title:</strong>
      {props.data?.title}
      <br />

      <strong>Completed:</strong>
      {mark ? (
        "True"
      ) : (
        <div style={{ float: "right" }}>
          False
          <button
            style={{ border: "2px solid black", width: "200px" }}
            onClick={click}
          >
            Mark completed
          </button>
        </div>
      )}
    </div>
  );
}
