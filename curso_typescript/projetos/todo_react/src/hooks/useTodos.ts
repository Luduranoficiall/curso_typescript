import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const local = localStorage.getItem('todos');
    return local ? JSON.parse(local) : [];
  });
  const [filtro, setFiltro] = useState<'todas' | 'concluidas' | 'pendentes'>('todas');
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const adicionarTodo = (texto: string) => {
    if (!texto.trim()) {
      setErro('O texto da tarefa não pode ser vazio.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setTodos(prev => {
        const novos = [...prev, { id: Date.now(), texto, concluido: false }];
        return novos;
      });
      setErro(null);
      setLoading(false);
    }, 500);
  };

  const alternarTodo = (id: number) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, concluido: !todo.concluido } : todo));
  };

  const removerTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtrarTodos = () => {
    if (filtro === 'concluidas') return todos.filter(t => t.concluido);
    if (filtro === 'pendentes') return todos.filter(t => !t.concluido);
    return todos;
  };

  return {
    todos,
    erro,
    filtro,
    setFiltro,
    adicionarTodo,
    alternarTodo,
    removerTodo,
    filtrarTodos,
    loading,
  };
}