import React, { useState } from 'react';

type Props = {
  adicionarTodo: (texto: string) => void;
};

const TodoForm: React.FC<Props> = ({ adicionarTodo }) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    adicionarTodo(texto);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }} aria-label="Adicionar nova tarefa">
      <label htmlFor="nova-tarefa" style={{ display: 'none' }}>Nova tarefa</label>
      <input
        id="nova-tarefa"
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Nova tarefa"
        style={{ flex: 1 }}
        aria-label="Nova tarefa"
        required
      />
      <button type="submit" aria-label="Adicionar tarefa">Adicionar</button>
    </form>
  );
};

export default TodoForm;
