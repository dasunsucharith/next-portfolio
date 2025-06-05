import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: 'John Doe Portfolio',
  description: 'Welcome to John Doe\'s personal website built with Next.js',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com/',
    siteName: 'John Doe Portfolio',
    images: [
      {
        url: '/vercel.svg',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
};

export default defaultSEOConfig;
