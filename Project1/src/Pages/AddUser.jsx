import React, { useState } from "react";
import { newUser } from "../utils";

export default function AddUser(props) {
  const [userN, setNUser] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setNUser({ ...userN, [name]: value });
  };
  const addNewUser = async () => {
    const { data } = await newUser(userN);
    props.callback(data);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        float: "right",
        width: "300px",
      }}
    >
      Add New User
      <br />
      <strong>Name:</strong>{" "}
      <input type="text" name="name" onChange={handleSubmit} />
      <br />
      <strong>Email:</strong>{" "}
      <input type="text" name="email" onChange={handleSubmit} />
      <br />
      <button onClick={addNewUser}>Add</button>
      <button onClick={props.func}>Cancel</button>
    </div>
  );
}
