import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
export const UserForm = ({ nome, setNome, email, setEmail, onSubmit }) => (_jsxs("form", { onSubmit: onSubmit, style: { display: 'flex', gap: 8, marginBottom: 16 }, "aria-label": "Adicionar novo usu\u00E1rio", children: [_jsx(Input, { id: "nome", label: "Nome", value: nome, onChange: e => setNome(e.target.value), placeholder: "Nome", required: true }), _jsx(Input, { id: "email", label: "Email", value: email, onChange: e => setEmail(e.target.value), placeholder: "Email", required: true, type: "email" }), _jsx(Button, { type: "submit", label: "Adicionar usu\u00E1rio", children: "Adicionar" })] }));
