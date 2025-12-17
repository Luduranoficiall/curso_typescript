import React from 'react';
import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Default = () => (
  <Input id="nome" label="Nome" value="" onChange={() => {}} placeholder="Digite seu nome" />
);
