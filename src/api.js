import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users/JoaoVitor19',
});

export default api;