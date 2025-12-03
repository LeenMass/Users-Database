import { useEffect, useState } from "react";
import { getTodosPerUser } from "./todosUtils";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [click, setClick] = useState(false);

  const btn = () => {
    setClick(!click);
  };

  const markTodoCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const getAllTodos = async () => {
    try {
      const data = await getTodosPerUser(props.userId);
      setTodos(data);
    } catch (error) {
      alert("Failed to get todos");
    }
  };

  const todosCallback = (newtodo) => {
    setTodos([...todos, newtodo]);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      const allCompleted = todos.every((todo) => todo.completed === true);
      if (allCompleted) {
        props.setIscompleted(true);
      }
    }
  }, [todos]);

  return (
    <div>
      <br />
      {!click ? (
        <>
          Todos-User {props.userId}
          <button onClick={btn} style={{ border: "2px solid black" }}>
            Add
          </button>
          <div
            style={{
              border: "1px solid black",
              width: "500px",
              marginLeft: "133px",
            }}
          >
            {todos.map((todo) => {
              return (
                <Todo
                  data={todo}
                  key={todo.id}
                  mark={todo.completed}
                  clickBtn={() => markTodoCompleted(todo.id)}
                />
              );
            })}
          </div>
        </>
      ) : (
        <AddTodo userId={props.userId} func={btn} callback={todosCallback} />
      )}
    </div>
  );
};
export default Todos;
