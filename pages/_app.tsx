import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/ac-globalnav.built.css'
import '../styles/accs-offer.css'
import '../styles/globals.css'
import '../styles/inline.css'
import '../styles/repair.css'
import '../styles/Base.min.css'
import '../styles/apple-care.css'
// import '../styles/main.built.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
