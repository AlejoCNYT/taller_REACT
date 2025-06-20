import axios from 'axios';

const api = axios.create({baseURL: 'http://54.144.228.63:8080/api', });

export default api;
