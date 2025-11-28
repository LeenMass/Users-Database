import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";


const getPostsPerUser = async (id) => {
    try {
        const response = await axios.get(`${POSTS_URL}?userId=${id}`);

        if (response.status !== 200) {
            throw new Error(`Failed to get posts: ${response.status}`);
        }

        return response.data;

    } catch (error) {
        throw new Error("An error occurred while fetching posts.");
    }
};

const newPostUser = async (post) => {
    try {
        const response = await axios.post(POSTS_URL, post);

        if (response.status !== 201) {
            throw new Error(`Failed to create new post: ${response.status}`);
        }

        return response.data;

    } catch (error) {
        throw new Error("An error occurred while creating the post");
    }
};

export { getPostsPerUser, newPostUser };

