import Head from 'next/head'
import { ReactElement } from 'react'

import { Layout } from '../components'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>WRAPP</title>
      <meta name='description' content='Quaterly Review App' />
    </Head>
    <main className='bg-white min-h-screen h-full'>
      <h1 className='text-black'>WRAPP APP</h1>
    </main>
  </div>
)

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
