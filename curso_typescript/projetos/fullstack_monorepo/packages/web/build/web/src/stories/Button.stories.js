import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button';
export default {
    title: 'Example/Button',
    component: Button,
};
export const Primary = () => _jsx(Button, { label: "Button", primary: true });
export const Secondary = () => _jsx(Button, { label: "Button" });
