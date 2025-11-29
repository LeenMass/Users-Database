import { useState } from "react";
import { newTodoUser } from "./todosUtils";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState({ userId: props.userId, title: "" });

  const addNewTodo = async () => {
    try {
      const { data } = await newTodoUser(newTodo);
      props.callback(data);
      alert("Adding Todo done Successfully");
    } catch (error) {
      alert("Failed to add todo");
    }
  };

  return (
    <>
      New Todo-User{props.userId}
      <br />
      <div
        style={{
          border: "2px solid black",
          width: "270px",
          marginLeft: "30px",
        }}
      >
        <strong>Title:</strong>{" "}
        <input
          type="text"
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <button onClick={addNewTodo}>Add</button>
        <button onClick={props.func}>Cancel</button>
      </div>
    </>
  );
};
export default AddTodo;
