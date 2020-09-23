import type { AppProps } from 'next/app';
import '../scss-pages/style.module.scss'; 
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp