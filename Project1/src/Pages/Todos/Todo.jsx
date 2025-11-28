import React, { useState } from "react";

export default function Todo(props) {
  const [mark, setMark] = useState(props.data.completed);

  const click = () => {
    setMark(!mark);
    props.changeColor(!mark);
  };

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
            onClick={click}
          >
            Mark completed
          </button>
        </>
      )}
    </div>
  );
}
