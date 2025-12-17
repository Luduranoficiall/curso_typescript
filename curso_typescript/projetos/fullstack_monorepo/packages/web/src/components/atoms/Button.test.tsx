import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button atom', () => {
  it('renderiza com label', () => {
    render(<Button label="Salvar" />);
    expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument();
  });

  it('chama onClick ao clicar', () => {
    const onClick = jest.fn();
    render(<Button label="Salvar" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }));
    expect(onClick).toHaveBeenCalled();
  });
});
