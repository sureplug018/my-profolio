import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  type: string;
}

function Container({ children, type }: ContainerProps) {
  const base = 'm-auto';

  const styles = {
    container: `${base} py-10 w-[90%] mb-15 bg-linear-to-r from-primary/15 to-secondary/10 rounded-xl shadow-xl`,
    full: `${base} py-10 mb-15`,
    fullWithGrad: `${base} py-5 bg-linear-to-r from-primary/15 to-secondary/10`,
  };
  return (
    <section className={styles[type as keyof typeof styles]}>
      {children}
    </section>
  );
}

export default Container;
