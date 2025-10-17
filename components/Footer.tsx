import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa6';
import Container from './Container';
import Link from 'next/link';

function Footer() {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  return (
    <div id='contact-me'>
      <Container type='fullWithGrad'>
        <div className='w-[80%] m-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='text-center md:text-start'>
            <p className='text-primary m-auto underline underline-offset-4 font-extrabold text-2xl mb-4'>
              Contact Me
            </p>
            <div className='flex space-x-10 justify-center md:justify-start mb-4'>
              <span>
                <Link href='https://github.com/sureplug018'>
                  <FaGithub className='text-xl' />
                </Link>
              </span>
              <span>
                <Link href='https://www.linkedin.com/in/raphael-eze-7178a8271/'>
                  <FaLinkedin className='text-xl' />
                </Link>
              </span>
              <span>
                <FaInstagram className='text-xl' />
              </span>
              <span>
                <Link href='https://x.com/raphael_eze_'>
                  <FaXTwitter className='text-xl' />
                </Link>
              </span>
            </div>
            <div className='flex text-lg items-center gap-2 justify-center md:justify-start mb-2'>
              <span>
                <FaEnvelope />
              </span>
              <span>
                <Link href='mailto:somraph018@gmail.com'>
                  somraph018@gmail.com
                </Link>
              </span>
            </div>
            <div className='flex text-lg items-center gap-2 justify-center md:justify-start mb-2'>
              <span>
                <FaPhone />
              </span>
              <span>
                <Link href='tel:07080225103'>07080225103</Link>
              </span>
            </div>
            <div className='flex text-lg items-center gap-2 justify-center md:justify-start'>
              <span>
                <FaLocationDot />
              </span>
              <span>Enugu, Nigeria</span>
            </div>
          </div>
          <div className='flex flex-col justify-end mt-5'>
            <div className='text-center md:text-end'>
              © {year}. All rights reserved
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
