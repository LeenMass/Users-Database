import { deleteUser, updateUser } from "../utils";
import React, { useEffect, useState } from "react";
import "./User.css";
import OtherData from "./OtherData";
import Todos from "./Todos";
import Posts from "./Posts";

export default function User(props) {
  const [edit, setEdit] = useState(false);
  const [updatuser, setUpdateuser] = useState(props.data);
  const [Isexist, setIsExist] = useState(false);
  const [completed, setIscompleted] = useState(true);
  const [isShow, setIsshow] = useState(false);
  const [todof, setTodof] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateuser({
      ...updatuser,
      [name]: value,
    });
  };
  const changeColor = (f) => {
    setTodof([...todof, f]);
  };

  const updateUserD = async () => {
    const { data } = await updateUser(props.data.id, updatuser);
    setUpdateuser(data);
    setEdit(false);
  };
  const handleEditClick = () => {
    setEdit(true);
  };
  const deleteUserD = async () => {
    await deleteUser(props.data.id);
    props.deleteuser(props.data.id);
  };
  useEffect(() => {
    let x = todof.every((e) => e !== true);
    setIscompleted(!x);
  }, [completed]);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className={completed ? "greendiv" : "maindiv"}
          style={{
            backgroundColor: isShow ? "orange" : "",
          }}
        >
          {edit ? (
            <>
              <br />
              <strong>Name: </strong>
              <input
                type="text"
                name="name"
                value={updatuser.name}
                onChange={handleChange}
              />
              <br />
              <strong>Email: </strong>
              <input
                type="text"
                name="email"
                value={updatuser.email}
                onChange={handleChange}
              />
              <br />
            </>
          ) : (
            <>
              <strong
                onClick={() => setIsshow(!isShow)}
                style={{ cursor: "grab" }}
              >
                ID:{props.data.id}{" "}
              </strong>
              <br />
              <strong>Name: </strong>
              {updatuser.name} <br />
              <strong>Email: </strong>
              {updatuser.email} <br />
            </>
          )}

          <button
            className="otherData"
            onMouseOver={() => setIsExist(!Isexist)}
          >
            Other Data
          </button>
          {Isexist ? (
            <OtherData moreData={props.data} data={handleChange} />
          ) : (
            ""
          )}
          {edit && (
            <button className="updatebtn" onClick={updateUserD}>
              Update
            </button>
          )}
          {!edit && (
            <button className="updatebtn" onClick={handleEditClick}>
              edit
            </button>
          )}
          <button className="deletebtn" onClick={deleteUserD}>
            Delete
          </button>
        </div>

        {isShow ? (
          <div style={{ float: "right" }}>
            <Todos userId={props.data.id} changeColor={changeColor} />
            <br />
            <Posts userId={props.data.id} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
