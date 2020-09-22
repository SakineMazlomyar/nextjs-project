import type { AppProps } from 'next/app'
import '../styles/style.module.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp