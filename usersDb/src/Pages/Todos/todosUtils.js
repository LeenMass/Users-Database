import axios from "axios";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosPerUser = async (id) => {
    try {
        const response = await axios.get(`${TODOS_URL}?userId=${id}`)

        if (response.status !== 201) {
            throw new Error(`Failed to todos: ${response.status}`);
        }

        return response.data;

    } catch (error) {
        throw new Error("An error occurred while fething todos");
    }

}

const newTodoUser = async (obj) => {
    try {
        const response = await axios.post(`${TODOS_URL}`, obj)


        if (response.status !== 201) {
            throw new Error(`Failed to create new todo: ${response.status}`);
        }

        return response.data;

    } catch (error) {
        throw new Error("An error occurred while creating new todo");
    }
}
export { getTodosPerUser, newTodoUser };
