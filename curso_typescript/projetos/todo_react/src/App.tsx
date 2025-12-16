import React, { useState } from 'react';
import { Todo } from '../types/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtro, setFiltro] = useState<'todas' | 'concluidas' | 'pendentes'>('todas');

  const adicionarTodo = (texto: string) => {
    if (!texto.trim()) return;
    setTodos([...todos, { id: Date.now(), texto, concluido: false }]);
  };

  const alternarTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, concluido: !todo.concluido } : todo));
  };

  const removerTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filtrarTodos = () => {
    if (filtro === 'concluidas') return todos.filter(t => t.concluido);
    if (filtro === 'pendentes') return todos.filter(t => !t.concluido);
    return todos;
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo App</h1>
      <TodoForm adicionarTodo={adicionarTodo} />
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
