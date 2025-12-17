import React from 'react';
import { useUsers } from './hooks/useUsers';
import { UserForm } from './components/molecules/UserForm';
import { UserList } from './components/organisms/UserList';

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
      <UserForm nome={nome} setNome={setNome} email={email} setEmail={setEmail} onSubmit={e => { void adicionar(e); }} />
      {erro && (
        <div style={{ color: 'red', margin: '8px 0' }} role="alert" aria-live="assertive">{erro}</div>
      )}
      {loading && (
        <div style={{ color: '#555', margin: '8px 0' }} aria-live="polite">Carregando usuários...</div>
      )}
      <UserList users={users} />
    </div>
  );
};

export default App;
