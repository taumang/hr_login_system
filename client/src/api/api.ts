import axios from 'axios';

const baseURL = 'http://localhost:5000';

const api = axios.create({
    baseURL,
});

api.interceptors.response.use((response)=>response.data)
export default api;