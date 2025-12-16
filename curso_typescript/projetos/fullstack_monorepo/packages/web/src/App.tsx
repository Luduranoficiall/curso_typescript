import React from 'react';
import { useUsers } from './hooks/useUsers';

const App: React.FC = () => {
  const {
    users,
    nome,
    setNome,
    email,
    setEmail,
    erro,
    adicionar,
    loading,
  } = useUsers();

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Usuários</h1>
      <form onSubmit={adicionar} style={{ display: 'flex', gap: 8, marginBottom: 16 }} aria-label="Adicionar novo usuário">
        <label htmlFor="nome" style={{ display: 'none' }}>Nome</label>
        <input
          id="nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Nome"
          required
          aria-label="Nome"
        />
        <label htmlFor="email" style={{ display: 'none' }}>Email</label>
        <input
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
          aria-label="Email"
          type="email"
        />
        <button type="submit" aria-label="Adicionar usuário">Adicionar</button>
      </form>
      {erro && (
        <div style={{ color: 'red', margin: '8px 0' }} role="alert" aria-live="assertive">{erro}</div>
      )}
      {loading && (
        <div style={{ color: '#555', margin: '8px 0' }} aria-live="polite">Carregando usuários...</div>
      )}
      <ul aria-live="polite">
        {users.map(u => (
          <li key={u.id} style={{ background: '#f8f8f8', margin: '4px 0', padding: 4, borderRadius: 4 }}>
            <span aria-label={`Usuário: ${u.nome}`}>{u.nome}</span> (<span aria-label={`Email: ${u.email}`}>{u.email}</span>)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
