import React, { useEffect, useState } from "react";
import { getUsers } from "../utils";
import User from "./User";
import AddUser from "./AddUser";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const addUserWindow = () => {
    setAddUser(!addUser);
    setCancel(!cancel);
  };
  const getAllUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };
  const handleUserDeleted = (deletedUserId) => {
    setUsers(users.filter((user) => user.id !== deletedUserId));
  };
  const usersCallback = (newuser) => {
    setUsers([...users, newuser]);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      {!addUser ? (
        <>
          <input
            type="search"
            onChange={(e) => setSearchInput(e.target.value.toLocaleLowerCase())}
            value={searchInput}
          />
          <button onClick={addUserWindow} style={{ border: "2px solid black" }}>
            Add
          </button>
          {users
            .filter((user) => user.name.toLocaleLowerCase().match(searchInput))
            .map((user) => {
              return (
                <User
                  data={user}
                  key={user.id}
                  deleteuser={handleUserDeleted}
                  style={{ display: "block" }}
                />
              );
            })}
        </>
      ) : (
        <div>
          {" "}
          <AddUser func={addUserWindow} callback={usersCallback} />
        </div>
      )}
    </div>
  );
}
