import axios from 'axios';

// URL base da API
const BASE_URL = 'http://localhost:8000/api/';

// ----- USUÁRIOS -----
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}usuarios/`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}usuarios/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ----- TAREFAS -----
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${BASE_URL}tarefas/`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}tarefas/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ----- FUNÇÕES ADICIONAIS (opcional) -----
// Excluir tarefa
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${BASE_URL}tarefas/${taskId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Atualizar tarefa (ex: mudar status)
export const updateTask = async (taskId, updateData) => {
  try {
    const response = await axios.patch(`${BASE_URL}tarefas/${taskId}/`, updateData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
