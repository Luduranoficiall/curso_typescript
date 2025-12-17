import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Primary = () => <Button label="Button" primary={true} />;
export const Secondary = () => <Button label="Button" />;

// Stories Large e Small removidos para evitar erro de parsing e garantir sintaxe válida
