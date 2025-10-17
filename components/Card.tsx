import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className='flex flex-col border bg-background border-gray-300 mb-2 py-1 px-2 rounded-lg items-center shadow-md hover:shadow-lg'>
      {children}
    </div>
  );
}

export default Card;
