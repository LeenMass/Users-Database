import axios from "axios";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosPerUser = (id) => axios.get(`${TODOS_URL}?userId=${id}`);
const newTodoUser = (obj) => axios.post(`${TODOS_URL}`, obj)

export { getTodosPerUser, newTodoUser };
