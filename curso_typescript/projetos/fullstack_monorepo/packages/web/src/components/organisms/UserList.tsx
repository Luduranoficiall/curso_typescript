import * as React from 'react';

export interface User {
  id: number;
  nome: string;
  email: string;
}

export interface UserListProps {
  users: User[];
}


const UserList: React.FC<UserListProps> = React.memo(({ users }) => (
  <ul aria-live="polite">
    {users.map(u => (
      <li key={u.id} style={{ background: '#f8f8f8', margin: '4px 0', padding: 4, borderRadius: 4 }}>
        <span aria-label={`Usuário: ${u.nome}`}>{u.nome}</span> (<span aria-label={`Email: ${u.email}`}>{u.email}</span>)
      </li>
    ))}
  </ul>
));
export { UserList };
export default UserList;
