import React, { useState } from 'react';
import Header from './components/Header';
import UserForm from './components/UserForm';
import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import './styles/main.scss';

function App() {
  const [currentView, setCurrentView] = useState('board');
  
  const renderView = () => {
    switch(currentView) {
      case 'user-form':
        return <UserForm />;
      case 'task-form':
        return <TaskForm />;
      case 'board':
      default:
        return <TaskBoard />;
    }
  };

  return (
    <div className="app">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;