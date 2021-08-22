import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/'
});

class DatabaseService {

    async getPosts() {
        return await axiosInstance.get('posts');
    }

    async addPost(post) {
        return await axiosInstance.post('post', post);
    }

}

export default new DatabaseService();