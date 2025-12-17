import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
describe('Input atom', () => {
    it('renderiza com label e valor', () => {
        render(_jsx(Input, { id: "nome", label: "Nome", value: "Jo\u00E3o", onChange: () => { } }));
        expect(screen.getByLabelText('Nome')).toBeInTheDocument();
        expect(screen.getByLabelText('Nome')).toHaveValue('João');
    });
    it('chama onChange ao digitar', () => {
        const onChange = jest.fn();
        render(_jsx(Input, { id: "nome", label: "Nome", value: "", onChange: onChange }));
        fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Maria' } });
        expect(onChange).toHaveBeenCalled();
    });
});
