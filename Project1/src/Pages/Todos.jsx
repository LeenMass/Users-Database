import React, { useEffect, useState } from "react";
import { getTodosPerUser } from "../utils";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [click, setClick] = useState(false);
  const [close, setClose] = useState(false);

  const btn = () => {
    setClick(!click);
    setClose(!close);
  };
  const getAllTodos = async () => {
    const { data } = await getTodosPerUser(props.userId);
    setTodos(data);
  };
  const todosCallback = (newtodo) => {
    setTodos([...todos, newtodo]);
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div>
      <br />
      {!click ? (
        <>
          Todos-User {props.userId}
          <button onClick={btn}>Add</button>
          {todos.map((todo) => {
            return <Todo data={todo} key={todo.id} func={props.e} />;
          })}
        </>
      ) : (
        <AddTodo userId={props.userId} func={btn} callback={todosCallback} />
      )}
    </div>
  );
}
