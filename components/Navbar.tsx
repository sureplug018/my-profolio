'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for hamburger and close
import { useState } from 'react';
import Button from './Button';
import NavItem from './NavItem';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-background border-primary/10 rounded-lg flex justify-center my-20'>
      <div className='p-5 rounded-lg border border-gray-300 hover:shadow-sm md:container fixed top-5 md:py-6 md:w-full w-[95%] bg-background z-10'>
        <div className='flex items-center justify-between max-w-6xl mx-auto'>
          {/* Logo */}
          <Link href='/' className='text-xl font-bold text-primary'>
            Raphael Eze
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-10 items-center'>
            <NavItem href='#home'>Home</NavItem>
            <NavItem href='#about-me'>About Me</NavItem>
            <NavItem href='#projects'>Projects</NavItem>
            <NavItem href='#contact-me'>Contact Me</NavItem>
            <NavItem href='#contact-me'>
              <Button type='secondary'>Hire Me</Button>
            </NavItem>
          </nav>

          {/* Mobile Toggler (Hamburger Icon) */}
          <button
            className='md:hidden text-primary focus:outline-none'
            onClick={toggleMenu}
            aria-label='Toggle navigation menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation (Slide-in from Right) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-primary/20 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0 z-20' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-end p-4'>
            <button
              className='text-primary focus:outline-none'
              onClick={toggleMenu}
              aria-label='Close navigation menu'
            >
              <X size={24} />
            </button>
          </div>
          <nav className='flex flex-col space-y-4 p-4'>
            <NavItem href='#home' onClick={toggleMenu}>
              Home
            </NavItem>
            <NavItem href='#about-me' onClick={toggleMenu}>
              About Me
            </NavItem>
            <NavItem href='#projects' onClick={toggleMenu}>
              Projects
            </NavItem>
            <NavItem href='#contact-me' onClick={toggleMenu}>
              Contact Me
            </NavItem>
            <NavItem onClick={toggleMenu} href='#contact-me'>
              <Button type='secondary'>Hire Me</Button>
            </NavItem>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
