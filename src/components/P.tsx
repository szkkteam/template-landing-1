import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

export interface PProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode;
}

const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ children, className, ...props }, ref) => (
    <p ref={ref} className={clsx(`text-base`, className)} {...props}>
      {children}
    </p>
  )
);

export default P;
