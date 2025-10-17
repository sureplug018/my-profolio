import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

// Configure Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Specify desired font weights
  variable: '--font-space-grotesk', // Custom CSS variable for Tailwind
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raphael Eze - Full-stack Developer',
  description:
    'A dedicated full-stack developer with a passion for building innovative, user-focused web applications that seamlessly blend creativity and functionality through clean, efficient code.',
  keywords: [
    'Raphael Eze',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Raphael Eze' }],
  creator: 'Raphael Eze',

  openGraph: {
    title: 'Raphael Eze | Full-stack Developer',
    description:
      'Portfolio of Raphael Eze – full-stack developer building elegant, scalable web applications.',
    url: 'https://raphael-eze.vercel.app/',
    siteName: 'Raphael Eze',
    // images: [
    //   {
    //     url: "https://raphaeleze.dev/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Raphael Eze Portfolio",
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${spaceGrotesk.variable} font-space-grotesk antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
