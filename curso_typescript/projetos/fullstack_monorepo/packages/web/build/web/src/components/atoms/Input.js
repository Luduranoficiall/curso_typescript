import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = ({ label, ...props }) => (_jsxs(_Fragment, { children: [_jsx("label", { htmlFor: props.id, style: { display: 'none' }, children: label }), _jsx("input", { "aria-label": label, ...props })] }));
