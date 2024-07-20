import React, { useEffect, useState } from "react";
import { getTodosPerUser } from "../utils";
import Todo from "./Todo";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => {
    const { data } = await getTodosPerUser(props.userId);
    setTodos(data);
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div>
      Todos-User {props.userId}
      <br />
      {todos.map((todo) => {
        return <Todo data={todo} key={todo.id} />;
      })}
    </div>
  );
}
