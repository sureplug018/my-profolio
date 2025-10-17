import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className='text-dark font-semibold hover:font-black hover:text-primary'
    >
      {children}
      hello
    </Link>
  );
}

export default NavItem;
