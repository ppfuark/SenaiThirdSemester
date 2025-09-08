import React from 'react';
import '../styles/main.scss';

const Header = ({ currentView, setCurrentView }) => {
  return (
    <header className="header">
      <h1 className="header__title">Sistema de Gerenciamento de Tarefas</h1>
      <nav className="header__nav">
        <button 
          className={`header__nav-btn ${currentView === 'board' ? 'active' : ''}`}
          onClick={() => setCurrentView('board')}
        >
          Quadro de Tarefas
        </button>
        <button 
          className={`header__nav-btn ${currentView === 'task-form' ? 'active' : ''}`}
          onClick={() => setCurrentView('task-form')}
        >
          Nova Tarefa
        </button>
        <button 
          className={`header__nav-btn ${currentView === 'user-form' ? 'active' : ''}`}
          onClick={() => setCurrentView('user-form')}
        >
          Novo Usuário
        </button>
      </nav>
    </header>
  );
};

export default Header;