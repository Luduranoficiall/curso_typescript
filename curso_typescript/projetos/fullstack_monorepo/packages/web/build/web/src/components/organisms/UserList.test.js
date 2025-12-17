import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { UserList } from './UserList';
describe('UserList organism', () => {
    it('renderiza lista de usuários', () => {
        const users = [
            { id: 1, nome: 'João', email: 'joao@email.com' },
            { id: 2, nome: 'Maria', email: 'maria@email.com' },
        ];
        render(_jsx(UserList, { users: users }));
        expect(screen.getByText('João')).toBeInTheDocument();
        expect(screen.getByText('Maria')).toBeInTheDocument();
    });
});
