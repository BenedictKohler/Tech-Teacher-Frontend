import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://tech-teacher-backend.herokuapp.com/'
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