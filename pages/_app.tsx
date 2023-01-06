import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect } from 'react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { registerModal } from '../utils/modal_utils'

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

let globalModalRef: React.Ref<string>

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>
}

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) => {
  useEffect(() => {
    registerModal(globalModalRef)
  }, [])

  if (Component.getLayout) {
    return <SessionProvider session={pageProps.session}>
      {Component.getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  }        

  return <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
}

export default App
