import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const App = () => {
    const [users, setUsers] = useState([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        fetch('http://localhost:4000/api/users')
            .then(res => res.json())
            .then(setUsers);
    }, []);
    const adicionar = async (e) => {
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
    return (_jsxs("div", { style: { maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }, children: [_jsx("h1", { children: "Usu\u00E1rios" }), _jsxs("form", { onSubmit: adicionar, style: { display: 'flex', gap: 8, marginBottom: 16 }, children: [_jsx("input", { value: nome, onChange: e => setNome(e.target.value), placeholder: "Nome", required: true }), _jsx("input", { value: email, onChange: e => setEmail(e.target.value), placeholder: "Email", required: true }), _jsx("button", { type: "submit", children: "Adicionar" })] }), _jsx("ul", { children: users.map(u => (_jsxs("li", { children: [u.nome, " (", u.email, ")"] }, u.id))) })] }));
};
export default App;
