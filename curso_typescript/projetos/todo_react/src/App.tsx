import React, { Suspense, lazy } from 'react';
import { useTodos } from './hooks/useTodos';
const TodoForm = lazy(() => import('./components/TodoForm'));
const TodoList = lazy(() => import('./components/TodoList'));

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
      <Suspense fallback={<div>Carregando formulário...</div>}>
        <TodoForm adicionarTodo={adicionarTodo} />
      </Suspense>
      {erro && (
        <div style={{ color: 'red', margin: '8px 0' }} role="alert" aria-live="assertive">{erro}</div>
      )}
      {loading && (
        <div style={{ color: '#555', margin: '8px 0' }} aria-live="polite">Carregando tarefas...</div>
      )}
      <div style={{ margin: '10px 0', display: 'flex', gap: 8 }}>
        <button onClick={() => setFiltro('todas')} aria-pressed={filtro==='todas'}>Todas</button>
        <button onClick={() => setFiltro('concluidas')} aria-pressed={filtro==='concluidas'}>Concluídas</button>
        <button onClick={() => setFiltro('pendentes')} aria-pressed={filtro==='pendentes'}>Pendentes</button>
      </div>
      <Suspense fallback={<div>Carregando lista...</div>}>
        <TodoList todos={filtrarTodos()} alternarTodo={alternarTodo} removerTodo={removerTodo} />
      </Suspense>
    </div>
  );
};

export default App;
