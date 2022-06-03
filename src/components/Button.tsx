import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  props?: Object;
  primary?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, primary = false, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          `rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
