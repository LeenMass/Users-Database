import React, { useState } from "react";

export default function Todo(props) {
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

      <div style={{ float: "right" }}>
        <button style={{ border: "2px solid black", width: "200px" }}>
          Mark completed
        </button>
      </div>
    </div>
  );
}
