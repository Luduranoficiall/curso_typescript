import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserForm } from './UserForm';

describe('UserForm molecule', () => {
  it('preenche e submete o formulário', () => {
    const setNome = jest.fn();
    const setEmail = jest.fn();
    const onSubmit = jest.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <UserForm nome="João" setNome={setNome} email="joao@email.com" setEmail={setEmail} onSubmit={onSubmit} />
    );
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Maria' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'maria@email.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar usuário' }));
    expect(setNome).toHaveBeenCalled();
    expect(setEmail).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });
});
