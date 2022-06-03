import { ReactNode } from 'react';

export interface MainProps {
  meta: ReactNode;
  children: ReactNode;
  header?: ReactNode;
}

const Main = ({ meta, children, header }: MainProps) => {
  return (
    <div>
      {meta}
      {header}
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Main;
