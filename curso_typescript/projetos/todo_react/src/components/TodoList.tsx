import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  alternarTodo: (id: number) => void;
  removerTodo: (id: number) => void;
};


const TodoList: React.FC<Props> = ({ todos, alternarTodo, removerTodo }) => (
  <ul style={{ listStyle: 'none', padding: 0 }} aria-live="polite">
    {todos.length === 0 && <li>Nenhuma tarefa encontrada.</li>}
    {todos.map(todo => (
      <li
        key={todo.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          margin: '8px 0',
          background: todo.concluido ? '#e0ffe0' : '#fff',
          borderLeft: todo.concluido ? '4px solid #2ecc40' : '4px solid transparent',
          opacity: todo.concluido ? 0.7 : 1,
        }}
      >
        <input
          type="checkbox"
          checked={todo.concluido}
          onChange={() => alternarTodo(todo.id)}
          aria-label={todo.concluido ? `Desmarcar tarefa: ${todo.texto}` : `Concluir tarefa: ${todo.texto}`}
        />
        <span
          style={{ textDecoration: todo.concluido ? 'line-through' : 'none', flex: 1 }}
          aria-label={todo.concluido ? `Tarefa concluída: ${todo.texto}` : todo.texto}
        >
          {todo.texto}
        </span>
        <button onClick={() => removerTodo(todo.id)} aria-label={`Remover tarefa: ${todo.texto}`}>Remover</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
