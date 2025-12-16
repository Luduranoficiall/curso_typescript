# Integração Avançada — 11_ts_com_react + 13_ts_com_express

## Exemplo: Consumindo API Node/Express no React com TypeScript

### 1. API Node/Express (backend)
```ts
// src/controllers/userController.ts
import { Request, Response } from 'express';
export function getUsers(req: Request, res: Response) {
  res.json([
    { id: 1, nome: 'Ana', email: 'ana@email.com' },
    { id: 2, nome: 'João', email: 'joao@email.com' }
  ]);
}
```

### 2. React (frontend)
```tsx
// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
type User = { id: number; nome: string; email: string };
const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.nome} ({u.email})</li>
      ))}
    </ul>
  );
};
export default UserList;
```

---
Esse exemplo mostra como integrar um backend Express com um frontend React usando TypeScript, promovendo projetos fullstack modernos.
