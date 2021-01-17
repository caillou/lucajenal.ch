import { ElementType } from 'react'
import '../styles/globals.css'

type AppParameter<P> = {
  Component: ElementType
  pageProps: P
}

function MyApp<P>({ Component, pageProps }: AppParameter<P>) {
  return <Component {...pageProps} />
}

export default MyApp
