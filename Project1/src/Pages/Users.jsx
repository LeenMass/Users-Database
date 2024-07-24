import React, { useEffect, useState } from "react";
import { getUsers } from "../utils";
import User from "./User";
import AddUser from "./AddUser";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [cancel, setCancel] = useState(false);

  const addUserWindow = () => {
    setAddUser(!addUser);
    setCancel(!cancel);
  };
  const getAllUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {!addUser ? (
        <div>
          {" "}
          <button onClick={addUserWindow}>Add</button>
          {users.map((user) => {
            return <User data={user} key={user.id} />;
          })}
        </div>
      ) : (
        <AddUser func={addUserWindow} />
      )}
    </div>
  );
}
