import { jsx as _jsx } from "react/jsx-runtime";
import { UserList } from './UserList';
export default {
    title: 'Organisms/UserList',
    component: UserList,
};
const users = [
    { id: 1, nome: 'Ana', email: 'ana@email.com' },
    { id: 2, nome: 'João', email: 'joao@email.com' },
];
export const Default = () => _jsx(UserList, { users: users });
