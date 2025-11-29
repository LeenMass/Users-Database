import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => axios.get(USERS_URL);
const newUser = (obj) => axios.post(`${USERS_URL}`, obj)
const updateUser = (id, obj) => axios.put(`${USERS_URL}/${id}`, obj);
const deleteUser = (id) => axios.delete(`${USERS_URL}/${id}`);
export { getUsers, newUser, updateUser, deleteUser };
