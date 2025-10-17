import Link from 'next/link';

function Footer() {
  return (
    <footer className='font-space-grotesk text-white absolute bottom-0 left-0 w-full bg-primary border-t border-primary/10 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-dark antialiased z-10'>
      <div className='mb-4 md:mb-0'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
      </div>
      <div className='flex space-x-6'>
        <Link
          href='/about'
          className='text-sm text-dark hover:text-primary hover:underline transition-colors'
        >
          About
        </Link>
        <Link
          href='/contact'
          className='text-sm text-dark hover:text-primary hover:underline transition-colors'
        >
          Contact
        </Link>
        <Link
          href='/privacy'
          className='text-sm text-dark hover:text-primary hover:underline transition-colors'
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
