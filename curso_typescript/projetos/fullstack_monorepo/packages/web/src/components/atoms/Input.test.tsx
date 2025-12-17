import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input atom', () => {
  it('renderiza com label e valor', () => {
    render(<Input id="nome" label="Nome" value="João" onChange={() => {}} />);
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome')).toHaveValue('João');
  });

  it('chama onChange ao digitar', () => {
    const onChange = jest.fn();
    render(<Input id="nome" label="Nome" value="" onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Maria' } });
    expect(onChange).toHaveBeenCalled();
  });
});
