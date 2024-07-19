import { getTodosPerUser } from "../utils";
import React, { useEffect, useState } from "react";
import "./User.css";
import OtherData from "./OtherData";
export default function User(props) {
  const userObj = props.data;
  const [user, setUser] = useState({ name: "", email: "" });
  const [Isexist, setIsExist] = useState(false);
  const [isCom, setIscompleted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkTodo = async () => {
    const { data } = await getTodosPerUser(userObj.id);
    const isCompleted = data.map((item) => item.completed);
    const z = isCompleted.every((item) => item == true);
    setIscompleted(z);
  };
  useEffect(() => {
    checkTodo();
  }, []);
  return (
    <>
      <div className={isCom ? "greendiv" : "maindiv"}>
        <strong>ID:</strong>
        {userObj.id}
        <br />
        <strong>Name: </strong>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={userObj.name}
        />
        <br />
        <strong>Email: </strong>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          defaultValue={userObj.email}
        />
        <br />
        <button className="otherData" onMouseOver={() => setIsExist(!Isexist)}>
          Other Data
        </button>
        {Isexist ? <OtherData moreData={userObj} /> : ""}
        <button className="updatebtn">Update</button>
        <button className="deletebtn">Delete</button>
      </div>
    </>
  );
}
