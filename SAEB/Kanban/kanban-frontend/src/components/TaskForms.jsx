import React, { useState } from 'react';
import { createTask, updateTask } from '../services/api';
import './TaskForm.css';

const TaskForm = ({ users, taskToEdit, onSuccess }) => {
  const [formData, setFormData] = useState({
    usuario: taskToEdit?.usuario || '',
    descricao: taskToEdit?.descricao || '',
    setor: taskToEdit?.setor || '',
    prioridade: taskToEdit?.prioridade || 'media',
    status: taskToEdit?.status || 'a_fazer'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (taskToEdit) {
        await updateTask(taskToEdit.id, formData);
      } else {
        await createTask(formData);
      }
      alert('Cadastro concluído com sucesso!');
      onSuccess();
    } catch (error) {
      alert('Erro ao salvar tarefa');
    }
  };

  return (
    <div className="task-form">
      <h1>{taskToEdit ? 'Editar Tarefa' : 'Cadastrar Nova Tarefa'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuário:</label>
          <select 
            name="usuario" 
            value={formData.usuario} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecione um usuário</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Descrição:</label>
          <textarea 
            name="descricao" 
            value={formData.descricao} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Setor:</label>
          <input 
            type="text" 
            name="setor" 
            value={formData.setor} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Prioridade:</label>
          <select 
            name="prioridade" 
            value={formData.prioridade} 
            onChange={handleChange} 
            required
          >
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        {taskToEdit && (
          <div className="form-group">
            <label>Status:</label>
            <select 
              name="status" 
              value={formData.status} 
              onChange={handleChange} 
              required
            >
              <option value="a_fazer">A Fazer</option>
              <option value="fazendo">Fazendo</option>
              <option value="pronto">Pronto</option>
            </select>
          </div>
        )}

        <button type="submit">
          {taskToEdit ? 'Atualizar Tarefa' : 'Cadastrar Tarefa'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;