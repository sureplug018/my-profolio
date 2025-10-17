import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: string;
}

function Button({ children, type }: ButtonProps) {
  const base =
    'rounded-xl cursor-pointer hover:shadow-md transition-shadow duration-300';

  const styles = {
    primary: `${base} px-9 py-2 bg-primary text-white hover:bg-primary/90`,
    secondary: `${base} px-9 py-2 bg-linear-to-r text-white from-secondary to-primary font-semibold`,
    smallPrimary: `${base} px-3 py-2 bg-primary text-white hover:bg-primary/90`,
    smallSecondary: `${base} px-3 py-2 bg-linear-to-r text-white from-secondary to-primary font-semibold`,
  };
  return (
    <button className={styles[type as keyof typeof styles]}>{children}</button>
  );
}

export default Button;
