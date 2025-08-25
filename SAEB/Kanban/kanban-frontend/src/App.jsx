import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import { getUsers, getTasks } from './services/api';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('board');
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadUsers();
    loadTasks();
  }, []);

  const loadUsers = async () => {
    const usersData = await getUsers();
    setUsers(usersData);
  };

  const loadTasks = async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <button onClick={() => setCurrentView('board')}>Gerenciar Tarefas</button>
        <button onClick={() => setCurrentView('taskForm')}>Cadastrar Tarefa</button>
        <button onClick={() => setCurrentView('userForm')}>Cadastrar Usuário</button>
      </nav>

      <main>
        {currentView === 'board' && <TaskBoard tasks={tasks} onUpdate={loadTasks} />}
        {currentView === 'taskForm' && <TaskForm users={users} onSuccess={() => { setCurrentView('board'); loadTasks(); }} />}
        {currentView === 'userForm' && <UserForm onSuccess={loadUsers} />}
      </main>
    </div>
  );
}

export default App;