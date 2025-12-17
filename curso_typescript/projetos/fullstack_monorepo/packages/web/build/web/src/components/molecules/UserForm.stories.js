import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { UserForm } from './UserForm';
export default {
    title: 'Molecules/UserForm',
    component: UserForm,
};
export const Default = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    return (_jsx(UserForm, { nome: nome, setNome: setNome, email: email, setEmail: setEmail, onSubmit: e => {
            e.preventDefault();
            alert(`Usuário: ${nome}, Email: ${email}`);
        } }));
};
