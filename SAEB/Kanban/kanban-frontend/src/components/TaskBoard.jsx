import React from 'react';
import TaskCard from './TaskCard';
import './TaskBoard.css';

const TaskBoard = ({ tasks, onUpdate }) => {
  const statusColumns = {
    a_fazer: 'A Fazer',
    fazendo: 'Fazendo',
    pronto: 'Pronto'
  };

  return (
    <div className="task-board">
      <h1>Gerenciamento de Tarefas</h1>
      <div className="columns-container">
        {Object.entries(statusColumns).map(([statusKey, statusName]) => (
          <div key={statusKey} className="status-column">
            <h2>{statusName}</h2>
            {tasks
              .filter(task => task.status === statusKey)
              .map(task => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onUpdate={onUpdate} 
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;