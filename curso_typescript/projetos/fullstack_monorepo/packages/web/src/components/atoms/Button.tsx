
import * as React from 'react';
import type { ReactNode, ButtonHTMLAttributes, ForwardedRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children?: ReactNode;
}


const Button = React.memo(React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, children, ...props }, ref: ForwardedRef<HTMLButtonElement>): React.ReactElement => (
    <button ref={ref} aria-label={label} {...props}>
      {children ?? label}
    </button>
  )
));
Button.displayName = 'Button';
export { Button };
export default Button;
