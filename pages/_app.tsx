import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}
