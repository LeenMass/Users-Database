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
  const handleSearch = () => {
    if (searchInput.length > 0) {
      users.filter((user) => {
        console.log(user?.name.match(searchInput));
        return user?.name.match(searchInput);
      });
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <div>
      {!addUser ? (
        <>
          {" "}
          <input
            type="search"
            onChange={(e) => setSearchInput(e.target.value.toLocaleLowerCase())}
            value={searchInput}
          />
          <button onClick={addUserWindow}>Add</button>
          {users
            .filter((user) => user.name.toLocaleLowerCase().match(searchInput))
            .map((user) => {
              return <User data={user} key={user.id} />;
            })}
        </>
      ) : (
        <AddUser func={addUserWindow} />
      )}
    </div>
  );
}
