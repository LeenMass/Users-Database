import { useState } from "react";
import { newTodoUser } from "./todosUtils";

const AddTodo = ({ addTodoBtn, addTodoToTodosArray, userId }) => {
  const [newTodo, setNewTodo] = useState({ userId: userId, title: "" });

  const addNewTodo = async () => {
    try {
      const { data } = await newTodoUser(newTodo);
      addTodoToTodosArray(data);
      alert("Adding Todo done Successfully");
    } catch (error) {
      alert("Failed to add todo");
    }
  };

  return (
    <>
      New Todo-User{userId}
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
        <button onClick={addTodoBtn}>Cancel</button>
      </div>
    </>
  );
};
export default AddTodo;
