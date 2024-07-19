import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getUsers = () => axios.get(USERS_URL);
const getTodosPerUser = (id) => axios.get(`${TODOS_URL}?userId=${id}`);
export { getUsers, getTodosPerUser };
