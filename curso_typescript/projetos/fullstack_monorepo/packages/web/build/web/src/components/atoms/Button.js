import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ label, ...props }) => (_jsx("button", { "aria-label": label, ...props, children: props.children || label }));
