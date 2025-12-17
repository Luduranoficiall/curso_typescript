import React, { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { Todo } from './types/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const {
    todos,
    erro,
    filtro,
    setFiltro,
    adicionarTodo,
    alternarTodo,
    removerTodo,
    filtrarTodos,
    loading,
  } = useTodos?.() ?? {};

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo App</h1>
      <TodoForm adicionarTodo={adicionarTodo} />
      {erro && (
        <div style={{ color: 'red', margin: '8px 0' }} role="alert" aria-live="assertive">{erro}</div>
      )}
      {loading && (
        <div style={{ color: '#555', margin: '8px 0' }} aria-live="polite">Carregando tarefas...</div>
      )}
      <div style={{ margin: '10px 0' }}>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
        <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
      </div>
      <TodoList todos={filtrarTodos()} alternarTodo={alternarTodo} removerTodo={removerTodo} />
    </div>
  );
};

export default App;
