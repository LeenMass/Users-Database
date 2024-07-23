import { getTodosPerUser } from "../utils";
import React, { useEffect, useState } from "react";
import "./User.css";
import OtherData from "./OtherData";
import Todos from "./Todos";
import Posts from "./Posts";

export default function User(props) {
  const userObj = props.data;
  const [user, setUser] = useState({ name: "", email: "" });
  const [Isexist, setIsExist] = useState(false);
  const [isCom, setIscompleted] = useState(false);
  const [isShow, setIsshow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const checkTodo = async () => {
  //   const { data } = await getTodosPerUser(userObj.id);
  //   const isCompleted = data.map((item) => item.completed);
  //   const z = isCompleted.every((item) => item == true);
  //   setIscompleted(z);
  //   console.log(isCom);
  // };
  useEffect(() => {
    // checkTodo();
  }, []);
  return (
    <>
      <div
        className="maindiv"
        style={{ backgroundColor: isShow ? "orange" : "" }}
      >
        <strong onClick={() => setIsshow(!isShow)} style={{ cursor: "grab" }}>
          ID:
        </strong>
        {userObj.id}
        <br />
        <strong>Name: </strong>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <strong>Email: </strong>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <button className="otherData" onMouseOver={() => setIsExist(!Isexist)}>
          Other Data
        </button>
        {Isexist ? <OtherData moreData={userObj} /> : ""}
        <button className="updatebtn">Update</button>
        <button className="deletebtn">Delete</button>
      </div>
      <div>
        {isShow ? (
          <div style={{ display: "flex" }}>
            <Todos userId={userObj.id} /> <br />
            <Posts userId={userObj.id} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
