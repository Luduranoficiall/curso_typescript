
import * as React from 'react';
import { useUsers } from './hooks/useUsers';
import { UserForm } from './components/molecules/UserForm';
import { UserList } from './components/organisms/UserList';

const GeminiChat = React.lazy(() => import('./components/GeminiChat').then(module => ({ default: module.default })));

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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', padding: 0, margin: 0 }}>
      <div style={{ maxWidth: 900, margin: '40px auto', display: 'flex', gap: 32, alignItems: 'flex-start', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0001', padding: 32, minWidth: 340 }}>
          <h1 style={{ marginBottom: 24, color: '#1e293b', fontWeight: 700, fontSize: 28 }}>Gestão de Usuários</h1>
          <UserForm
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            onSubmit={(e) => { void adicionar(e); }}
          />
          {erro && (
            <div style={{ color: '#e11d48', margin: '12px 0', fontWeight: 500 }} role="alert" aria-live="assertive">{erro}</div>
          )}
          {loading && (
            <div style={{ color: '#64748b', margin: '12px 0' }} aria-live="polite">Carregando usuários...</div>
          )}
          <UserList users={users} />
        </div>
        <div style={{ flex: 1, minWidth: 340 }}>
          <React.Suspense fallback={<div>Carregando chat...</div>}>
            <GeminiChat />
          </React.Suspense>
        </div>
      </div>
      <footer style={{ textAlign: 'center', color: '#64748b', marginTop: 48, fontSize: 14 }}>
        <span>Curso TypeScript Especialista Premium Ouro &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
};

export default App;
