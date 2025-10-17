'use client';

import Image from 'next/image';
import Greeting from './Greeting';
import Button from './Button';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

function Hero() {
  return (
    <section
      id='home'
      className='md:mt-20 mt-14 mb-10 md:mb-15 lg:mb-20 scroll-mt-40'
    >
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 w-[85%] m-auto'>
        <div className='md:col-span-2 md:mr-20 lg:mr-30 md:text-left text-center'>
          <div className='text-primary md:text-4xl/10 lg:text-5xl/15 lg:mt-20 md:mt-6 text-3xl font-bold mb-3 text-shadow-sm typing-effect'>
            👋🏾
            <Greeting />
          </div>
          <div className='mb-4'>
            <h1>
              A dedicated full-stack developer with a passion for building
              innovative, user-focused web applications that seamlessly blend
              creativity and functionality through clean, efficient code.
            </h1>
          </div>
          <div className='flex space-x-10 justify-center md:justify-start mb-4'>
            <span>
              <Link href='https://github.com/sureplug018'>
                <FaGithub className='text-2xl' />
              </Link>
            </span>
            <span>
              <Link href='https://www.linkedin.com/in/raphael-eze-7178a8271/'>
                <FaLinkedin className='text-2xl' />
              </Link>
            </span>
            <span>
              <FaInstagram className='text-2xl' />
            </span>
            <span>
              <Link href='https://x.com/raphael_eze_'>
                <FaXTwitter className='text-2xl' />
              </Link>
            </span>
          </div>

          <Button type='secondary'>Résumé</Button>
        </div>
        <div className='mt-8 md:mt-10'>
          <Image
            alt='profile'
            width={400}
            height={400}
            className='rounded-full border-primary border-4'
            src='/profile.jpg'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
