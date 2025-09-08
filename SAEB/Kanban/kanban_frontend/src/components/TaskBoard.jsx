import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { taskService } from '../services/api';
import '../styles/main.scss';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await taskService.getAll();
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleDelete = async (task) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      try {
        await taskService.delete(task.id);
        fetchTasks();
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
      }
    }
  };

  const handleStatusChange = async (task, newStatus) => {
    try {
      await taskService.update(task.id, { ...task, status: newStatus });
      fetchTasks();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  const handleSaveComplete = () => {
    setShowForm(false);
    setEditingTask(null);
    fetchTasks();
  };

  const renderTaskCard = (task) => (
    <div key={task.id} className="task-card">
      <div className="task-card__content">
        <p className="task-card__description">{task.descricao}</p>
        <div className="task-card__details">
          <span className="task-card__detail">Setor: {task.setor}</span>
          <span className={`task-card__priority task-card__priority--${task.prioridade}`}>
            Prioridade: {task.prioridade}
          </span>
          <span className="task-card__detail">Vinculado a: {task.usuario_object?.nome}</span>
        </div>
      </div>
      <div className="task-card__actions">
        <select 
          value={task.status} 
          onChange={(e) => handleStatusChange(task, e.target.value)}
          className="task-card__status-select"
        >
          <option value="a_fazer">A Fazer</option>
          <option value="fazendo">Fazendo</option>
          <option value="pronto">Pronto</option>
        </select>
        <button 
          className="task-card__btn task-card__btn--edit"
          onClick={() => handleEdit(task)}
        >
          Editar
        </button>
        <button 
          className="task-card__btn task-card__btn--delete"
          onClick={() => handleDelete(task)}
        >
          Excluir
        </button>
      </div>
    </div>
  );

  if (showForm) {
    return (
      <TaskForm 
        editingTask={editingTask} 
        onSaveComplete={handleSaveComplete} 
      />
    );
  }

  const tasksByStatus = {
    a_fazer: tasks.filter(task => task.status === 'a_fazer'),
    fazendo: tasks.filter(task => task.status === 'fazendo'),
    pronto: tasks.filter(task => task.status === 'pronto')
  };

  return (
    <div className="task-board">
      <h2 className="task-board__title">Quadro de Tarefas</h2>
      
      <div className="task-board__columns">
        <div className="task-board__column">
          <h3 className="task-board__column-title">A Fazer</h3>
          <div className="task-board__tasks">
            {tasksByStatus.a_fazer.map(renderTaskCard)}
          </div>
        </div>
        
        <div className="task-board__column">
          <h3 className="task-board__column-title">Fazendo</h3>
          <div className="task-board__tasks">
            {tasksByStatus.fazendo.map(renderTaskCard)}
          </div>
        </div>
        
        <div className="task-board__column">
          <h3 className="task-board__column-title">Pronto</h3>
          <div className="task-board__tasks">
            {tasksByStatus.pronto.map(renderTaskCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;