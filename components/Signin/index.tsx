import { useSession } from 'next-auth/react'

import { Layout } from 'components'
import SigninForm from '@comp/Signin/signinForm'

import { SigninProps } from '@src/typings'

import { mainBox, imageBox, formBox } from '@comp/Signin/styles'

const Signin = ({ providers }: SigninProps) => {
  const { data: session } = useSession()

  if (session) return <Layout />

  return <>
    <section className='h-screen'>
      <div className='px-16 h-full text-gray-800'>
        <div className={mainBox}>
          <div className={imageBox}>
            <img src='raap.webp' className='w-full' alt='RAPP' />
          </div>
          <div className={formBox}>
            <SigninForm providers={providers} />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Signin
