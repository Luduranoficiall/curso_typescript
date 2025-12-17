import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <>
    <label htmlFor={props.id} style={{ display: 'none' }}>{label}</label>
    <input aria-label={label} {...props} />
  </>
);
