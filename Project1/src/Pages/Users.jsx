import React, { useEffect, useState } from "react";
import { getUsers } from "../utils";
import User from "./User";
export default function Users() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return <User data={user} key={user.id} />;
      })}
    </div>
  );
}
