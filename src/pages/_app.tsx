import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GunProvider } from 'lib/hooks/GunHook'

function MyApp({ Component, pageProps }: AppProps) {
  return <GunProvider>
    <Component {...pageProps} />
    </GunProvider>
}

export default MyApp
