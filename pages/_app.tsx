import type { AppProps } from 'next/app'
import Head from 'next/head'
import { inter } from '../lib/fonts'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${inter.className} min-h-screen`}>
      <Head>
        <title>EMFIS</title>
        <link rel="icon/image" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
