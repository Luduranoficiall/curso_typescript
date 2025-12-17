import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useUsers } from './hooks/useUsers';
import { UserForm } from './components/molecules/UserForm';
import { UserList } from './components/organisms/UserList';
const App = () => {
    const { users, nome, setNome, email, setEmail, erro, adicionar, loading, } = useUsers();
    return (_jsxs("div", { style: { maxWidth: 400, margin: '40px auto', fontFamily: 'sans-serif' }, children: [_jsx("h1", { children: "Usu\u00E1rios" }), _jsx(UserForm, { nome: nome, setNome: setNome, email: email, setEmail: setEmail, onSubmit: e => { void adicionar(e); } }), erro && (_jsx("div", { style: { color: 'red', margin: '8px 0' }, role: "alert", "aria-live": "assertive", children: erro })), loading && (_jsx("div", { style: { color: '#555', margin: '8px 0' }, "aria-live": "polite", children: "Carregando usu\u00E1rios..." })), _jsx(UserList, { users: users })] }));
};
export default App;
