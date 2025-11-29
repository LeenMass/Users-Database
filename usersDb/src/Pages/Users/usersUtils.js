import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
    try {
        const response = await axios.get(USERS_URL);

        if (response.status !== 200) {
            throw new Error(`Failed to get users: ${response.status}`);
        }

        return response.data;

    }
    catch (error) {
        throw new Error("An error occurred while fetching users");
    }
}

const newUser = async (obj) => {
    try {
        const response = await axios.post(`${USERS_URL}`, obj)
        if (response.status !== 201) {
            throw new Error(`Failed to add new user: ${response.status}`);
        }

        return response.data;

    }
    catch (error) {
        throw new Error("An error occurred while adding new user");
    }
}
const updateUser = async (id, obj) => {
    try {

        const response = await axios.put(`${USERS_URL}/${id}`, obj);

        if (response.status !== 200) {
            throw new Error(`Failed to update user's details: ${response.status}`);
        }
    }
    catch (error) {
        throw new Error("An error occurred while updating user details");

    }
    return response.data;
}
const deleteUser = async (id) => {
    try {

        const response = await axios.delete(`${USERS_URL}/${id}`);
        if (response.status !== 200) {
            throw new Error(`Failed to delete this user ${response.status}`);
        }
        return response.data
    }
    catch (error) {
        throw new Error("An error occurred while deleting user");

    }
}



export { getUsers, newUser, updateUser, deleteUser };
