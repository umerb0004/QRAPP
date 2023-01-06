import { useSession } from 'next-auth/react'

import Layout from '../Layout/index'
import SigninForm from './signinForm'
import { SigninProps } from '@src/typings'


const Signin = ({ providers }: SigninProps) => {
  const { data: session } = useSession()

  if (session) return <Layout />
  
  return <>
    <section className='h-screen'>
      <div className='px-16 h-full text-gray-800'>
        <div className='flex xl:justify-center justify-center items-center flex-wrap h-full g-6 pb-8'>
          <div className='xs:hidden sm:inline grow-0 shrink-1 2xl:w-1/3 basis-auto xl:w-5/12 lg:w-6/12 md:w-9/12 mb-8 md:mb-0'>
            <img src='raap.webp' className='w-full' alt='RAPP' />
          </div>
          <div className='2xl:w-1/4 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-8 md:mb-0'>
            <SigninForm providers={providers} />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Signin
