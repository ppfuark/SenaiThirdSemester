import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import { taskService } from '../services/api';
import '../styles/main.scss';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [draggedTask, setDraggedTask] = useState(null);

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

  // Drag and Drop handlers
  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', task.id);
  };

  const handleDragOver = (e, status) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // Adiciona classe visual para feedback
    const column = e.currentTarget;
    column.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    // Remove classe visual
    const column = e.currentTarget;
    column.classList.remove('drag-over');
  };

  const handleDrop = async (e, newStatus) => {
    e.preventDefault();
    
    // Remove classe visual
    const column = e.currentTarget;
    column.classList.remove('drag-over');
    
    if (!draggedTask) return;

    try {
      await taskService.update(draggedTask.id, { 
        ...draggedTask, 
        status: newStatus 
      });
      fetchTasks();
      setDraggedTask(null);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status da tarefa');
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleDelete = async (task) => {
    if (window.confirm(`Tem certeza que deseja excluir a tarefa "${task.descricao}"?`)) {
      try {
        await taskService.delete(task.id);
        fetchTasks();
        alert('Tarefa excluída com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
        alert('Erro ao excluir tarefa');
      }
    }
  };

  const handleStatusChange = async (task, newStatus) => {
    try {
      await taskService.update(task.id, { ...task, status: newStatus });
      fetchTasks();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      alert('Erro ao atualizar status da tarefa');
    }
  };

  const handleSaveComplete = () => {
    setShowForm(false);
    setEditingTask(null);
    fetchTasks();
  };

  const renderTaskCard = (task) => (
    <div 
      key={task.id} 
      className="task-card"
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
      aria-describedby={`task-${task.id}-desc`}
      role="button"
      tabIndex={0}
    >
      <div className="task-card__content">
        <p 
          id={`task-${task.id}-desc`}
          className="task-card__description"
        >
          {task.descricao}
        </p>
        <div className="task-card__details">
          <span className="task-card__detail">Setor: {task.setor}</span>
          <span className={`task-card__priority task-card__priority--${task.prioridade}`}>
            Prioridade: {task.prioridade}
          </span>
          <span className="task-card__detail">Vinculado a: {task.usuario_nome}</span>
        </div>
      </div>
      <div className="task-card__actions">
        <select 
          value={task.status} 
          onChange={(e) => handleStatusChange(task, e.target.value)}
          className="task-card__status-select"
          aria-label={`Alterar status da tarefa ${task.descricao}`}
        >
          <option value="a_fazer">A Fazer</option>
          <option value="fazendo">Fazendo</option>
          <option value="pronto">Pronto</option>
        </select>
        <button 
          className="task-card__btn task-card__btn--edit"
          onClick={() => handleEdit(task)}
          aria-label={`Editar tarefa ${task.descricao}`}
        >
          Editar
        </button>
        <button 
          className="task-card__btn task-card__btn--delete"
          onClick={() => handleDelete(task)}
          aria-label={`Excluir tarefa ${task.descricao}`}
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

  const columnConfig = [
    { status: 'a_fazer', title: 'A Fazer', ariaLabel: 'Coluna de tarefas a fazer' },
    { status: 'fazendo', title: 'Fazendo', ariaLabel: 'Coluna de tarefas em andamento' },
    { status: 'pronto', title: 'Pronto', ariaLabel: 'Coluna de tarefas concluídas' }
  ];

  return (
    <div className="task-board">
      <h2 className="task-board__title">Quadro de Tarefas</h2>
      
      <div 
        className="task-board__columns"
        role="region"
        aria-label="Quadro de tarefas organizadas por status"
      >
        {columnConfig.map((column) => (
          <div 
            key={column.status}
            className="task-board__column"
            onDragOver={(e) => handleDragOver(e, column.status)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, column.status)}
            aria-label={column.ariaLabel}
          >
            <h3 className="task-board__column-title">
              {column.title} 
              <span className="task-count">
                ({tasksByStatus[column.status].length})
              </span>
            </h3>
            <div 
              className="task-board__tasks"
              aria-live="polite"
              aria-atomic="true"
            >
              {tasksByStatus[column.status].map(renderTaskCard)}
              {tasksByStatus[column.status].length === 0 && (
                <p className="task-board__empty-message">
                  Nenhuma tarefa {column.status === 'a_fazer' ? 'a fazer' : 
                                column.status === 'fazendo' ? 'em andamento' : 
                                'concluída'}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;