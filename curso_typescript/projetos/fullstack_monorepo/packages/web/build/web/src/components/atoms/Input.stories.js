import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from './Input';
export default {
    title: 'Atoms/Input',
    component: Input,
};
export const Default = () => (_jsx(Input, { id: "nome", label: "Nome", value: "", onChange: () => { }, placeholder: "Digite seu nome" }));
