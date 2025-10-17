import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <section className='bg-linear-to-r from-primary/15 to-secondary/10 w-[90%] m-auto rounded-xl py-10 shadow-xl mb-15'>
      <div className='w-[90%] text-center m-auto lg:w-[70%]'>{children}</div>
    </section>
  );
}

export default Container;
