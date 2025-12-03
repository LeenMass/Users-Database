import { deleteUser, updateUser } from "./usersUtils";
import { useEffect, useState } from "react";
import "../../assets/User.css";
import OtherData from "./OtherData";
import Todos from "../Todos/Todos";
import Posts from "../Posts/Posts";

const User = ({ userData, deleteuser }) => {
  const [edit, setEdit] = useState(false);
  const [updatuser, setUpdateuser] = useState(props.userData);
  const [Isexist, setIsExist] = useState(false);
  const [isShow, setIsshow] = useState(false);
  const [completedTodos, setIscompletedTodos] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateuser({
      ...updatuser,
      [name]: value,
    });
  };

  const updateUserD = async () => {
    try {
      const data = await updateUser(data.id, updatuser);
      setUpdateuser(data);
      setEdit(false);
    } catch (error) {
      alert("Failed to update user");
    }
  };
  const handleEditClick = () => {
    setEdit(true);
  };
  const deleteUserD = async () => {
    try {
      await deleteUser(userData.id);
      deleteuser(userData.id);
    } catch (error) {
      alert("Failed to delete this user");
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className={completedTodos ? "greendiv" : "maindiv"}
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
            <OtherData moreData={userData} handleChange={handleChange} />
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
            <Todos userId={userData.id} setIscompleted={setIscompletedTodos} />
            <br />
            <Posts userId={userData.id} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default User;
