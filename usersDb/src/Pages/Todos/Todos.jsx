import { useEffect, useState } from "react";
import { getTodosPerUser } from "./todosUtils";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos = ({ setIscompleted, userId }) => {
  const [todos, setTodos] = useState([]);
  const [click, setClick] = useState(false);
  const [cancel, setCancel] = useState(false);

  const addTodoBtn = () => {
    setClick(!click);
    setCancel(!cancel);
  };

  const markTodoCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const getAllTodos = async () => {
    try {
      const data = await getTodosPerUser(userId);
      setTodos(data);
    } catch (error) {
      alert("Failed to get todos");
    }
  };

  const addTodoToTodosArray = (newtodo) => {
    setTodos([...todos, newtodo]);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      const allCompleted = todos.every((todo) => todo.completed === true);
      if (allCompleted) {
        setIscompleted(true);
      }
    }
  }, [todos]);

  return (
    <div>
      <br />
      {!click ? (
        <>
          Todos-User {userId}
          <button onClick={addTodoBtn} style={{ border: "2px solid black" }}>
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
        <AddTodo
          userId={userId}
          addTodoBtn={addTodoBtn}
          addTodoToTodosArray={addTodoToTodosArray}
        />
      )}
    </div>
  );
};
export default Todos;
