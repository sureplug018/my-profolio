'use client';

import Image from 'next/image';
import Greeting from './Greeting';
import Button from './Button';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

function Hero() {
  return (
    <section className='md:mt-20 mt-14 mb-10 md:mb-15 lg:mb-20'>
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
              <FaGithub className='text-2xl' />
            </span>
            <span>
              <FaLinkedin className='text-2xl' />
            </span>
            <span>
              <FaInstagram className='text-2xl' />
            </span>
            <span>
              <FaXTwitter className='text-2xl' />
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
