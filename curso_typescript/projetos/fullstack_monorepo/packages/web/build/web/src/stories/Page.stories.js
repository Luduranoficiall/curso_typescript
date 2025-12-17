import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from './Page';
export default {
    title: 'Example/Page',
    component: Page,
};
export const LoggedOut = () => (_jsx(Page, {}));
export const LoggedIn = () => _jsx(Page, {});
