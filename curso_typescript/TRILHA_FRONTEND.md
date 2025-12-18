# Trilha Temática: Frontend React + TypeScript

## Exercício 1: Componente de Lista
**Enunciado:**
Crie um componente React que recebe uma lista de usuários e exibe nome e email. Use tipagem forte nas props.

**Solução:**
```tsx
import React from 'react';
type User = { id: number; nome: string; email: string };
export const UserList: React.FC<{ users: User[] }> = ({ users }) => (
  <ul>{users.map(u => <li key={u.id}>{u.nome} ({u.email})</li>)}</ul>
);
```

---
## Exercício 2: Formulário Controlado
**Enunciado:**
Implemente um formulário controlado para adicionar usuários, validando campos obrigatórios.

**Solução:**
```tsx
import React, { useState } from 'react';
export const UserForm = ({ onAdd }: { onAdd: (u: any) => void }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onAdd({ nome, email }); }}>
      <input value={nome} onChange={e => setNome(e.target.value)} required />
      <input value={email} onChange={e => setEmail(e.target.value)} required type="email" />
      <button type="submit">Adicionar</button>
    </form>
  );
};
```

---
## Exercício 3: Consumo de API
**Enunciado:**
Consuma a API de usuários do backend e exiba a lista no frontend.

**Solução:**
```tsx
import React, { useEffect, useState } from 'react';
export const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => { fetch('/users').then(r => r.json()).then(setUsers); }, []);
  return <UserList users={users} />;
};
```
