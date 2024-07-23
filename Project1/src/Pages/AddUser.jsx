import React, { useState } from "react";
import { newUser } from "../utils";

export default function AddUser(props) {
  const [userN, setNUser] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    const { name: value } = e.target;
    setNUser({ ...userN, [name]: value });
  };
  const addNewUser = async () => {
    const { data } = await newUser(userN);
    console.log(data);
  };

  return (
    <div>
      Add New User
      <br />
      <div style={{ border: "2px solid black", width: "270px" }}>
        <strong>Name:</strong>{" "}
        <input type="text" name="name" onChange={handleSubmit} />
        <strong>Email:</strong>{" "}
        <input type="text" name="email" onChange={handleSubmit} />
        <button onClick={addNewUser}>Add</button>
        <button onClick={props.func}>Cancel</button>
      </div>
    </div>
  );
}
