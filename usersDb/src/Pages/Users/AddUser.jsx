import { useState } from "react";
import { newUser } from "./usersUtils";

const AddUser = (props) => {
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const addNewUser = async () => {
    try {
      const data = await newUser(user);
      props.addUserToArray(data);
      alert("Adding User done Successfully");
    } catch (error) {
      alert("Failed to add new user");
    }
  };

  return (
    <>
      Add New User
      <br />
      <strong>Name:</strong>{" "}
      <input type="text" name="name" onChange={handleSubmit} />
      <br />
      <strong>Email:</strong>{" "}
      <input type="text" name="email" onChange={handleSubmit} />
      <br />
      <button onClick={addNewUser}>Add </button>
      <button onClick={props.AddingUserWindow}>Cancel</button>
    </>
  );
};
export default AddUser;
