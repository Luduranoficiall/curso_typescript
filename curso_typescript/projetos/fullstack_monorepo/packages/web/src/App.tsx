import React, { useEffect, useState } from 'react';
import { User } from '../../types/User';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  const adicionar = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    });
    const novo = await res.json();
    setUsers([...users, novo]);
    setNome('');
    setEmail('');
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Usuários</h1>
      <form onSubmit={adicionar} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.nome} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
