import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  alternarTodo: (id: number) => void;
  removerTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, alternarTodo, removerTodo }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {todos.length === 0 && <li>Nenhuma tarefa encontrada.</li>}
    {todos.map(todo => (
      <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
        <input
          type="checkbox"
          checked={todo.concluido}
          onChange={() => alternarTodo(todo.id)}
        />
        <span style={{ textDecoration: todo.concluido ? 'line-through' : 'none', flex: 1 }}>{todo.texto}</span>
        <button onClick={() => removerTodo(todo.id)}>Remover</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
