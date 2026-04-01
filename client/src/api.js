import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

export const getServices = () => api.get('/api/services');
export const getProjects = () => api.get('/api/projects');
export const postContact = (data) => api.post('/api/contact', data);

export default api;
