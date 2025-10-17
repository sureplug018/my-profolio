'use client';

import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Footer /> */}
    </>
  );
}
