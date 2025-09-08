import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  getAll: () => api.get('/usuarios/'),
  create: (userData) => api.post('/usuarios/', userData),
};

export const taskService = {
  getAll: () => api.get('/tarefas/'),
  getById: (id) => api.get(`/tarefas/${id}/`),
  create: (taskData) => api.post('/tarefas/', taskData),
  update: (id, taskData) => api.put(`/tarefas/${id}/`, taskData),
  delete: (id) => api.delete(`/tarefas/${id}/`),
};

export default api;