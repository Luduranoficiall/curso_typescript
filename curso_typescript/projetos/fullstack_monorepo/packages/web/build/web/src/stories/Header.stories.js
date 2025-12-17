import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from './Header';
export default {
    title: 'Example/Header',
    component: Header,
};
export const LoggedIn = () => (_jsx(Header, { user: { name: 'Jane Doe' }, onLogin: () => { }, onLogout: () => { }, onCreateAccount: () => { } }));
export const LoggedOut = () => (_jsx(Header, { onLogin: () => { }, onLogout: () => { }, onCreateAccount: () => { } }));
