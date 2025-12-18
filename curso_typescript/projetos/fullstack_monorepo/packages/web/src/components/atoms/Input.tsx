
import * as React from 'react';
import type { InputHTMLAttributes, ForwardedRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
}


const Input = React.memo(React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref: ForwardedRef<HTMLInputElement>): React.ReactElement => (
    <>
      <label htmlFor={id} style={{ display: 'none' }}>{label}</label>
      <input ref={ref} id={id} aria-label={label} {...props} />
    </>
  )
));
Input.displayName = 'Input';
export { Input };
export default Input;
