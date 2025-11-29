import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getUsers = () => axios.get(USERS_URL);
const getTodosPerUser = (id) => axios.get(`${TODOS_URL}?userId=${id}`);
const getPostsPerUser = (id) => axios.get(`${POSTS_URL}?userId=${id}`);
const newTodoUser = (obj) => axios.post(`${TODOS_URL}`, obj)
const newPostUser = (obj) => axios.post(`${POSTS_URL}`, obj)
const newUser = (obj) => axios.post(`${USERS_URL}`, obj)
const updateUser = (id, obj) => axios.put(`${USERS_URL}/${id}`, obj);
const deleteUser = (id) => axios.delete(`${USERS_URL}/${id}`);
export { getUsers, getTodosPerUser, getPostsPerUser, newTodoUser, newPostUser, newUser, updateUser, deleteUser };
