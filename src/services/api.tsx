import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:8081/api',
});

export default api;
