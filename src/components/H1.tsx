import clsx from 'clsx';
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

export interface H1Props extends ComponentPropsWithRef<'h1'> {
  children: ReactNode;
}

const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ children, className }, ref) => (
    <h1
      ref={ref}
      className={clsx(
        `text-center text-3xl font-bold leading-tight`,
        className
      )}
    >
      {children}
    </h1>
  )
);

export default H1;
