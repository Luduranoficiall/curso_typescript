import React from 'react';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
};

export const LoggedOut = () => (<Page />);
export const LoggedIn = () => <Page />;
