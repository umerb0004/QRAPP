import { getProviders, useSession } from 'next-auth/react'

import LoginForm from '../components/googleSignin/loginForm'
import Signin from '../components/googleSignin/signIn'
import Signout from '../components/googleSignin/signOut'

interface LoginProps {
  providers: {
    id: string
    name: string
  }[]
}

const Login : React.FC<LoginProps> = ({ providers } : LoginProps) => {
  const { data: session } = useSession()

  if (session) {
    return <Signout session={session} />
  } else {
    return (
      <>
        <section className='h-screen'>
          <div className='px-6 h-full text-gray-800'>
            <div className='flex xljustify-center lgjustify-between justify-center items-center flex-wrap h-full g-6 mx-20'>
              <div className='grow-0 1xl:w-1/3 shrink-1 md:shrink-0 basis-auto xl:w-1/2 lg:w-1/2 md:w-1/2 mb-12 mdmb-0'>
                <img src='raap.webp' className='w-full' alt='Sample image' />
              </div>
              <div className='grow-0 1xl:w-1/3 shrink-1 md:shrink-0 basis-auto xl:w-1/2 lg:w-1/2 md:w-1/2 mb-12 mdmb-0 px-20'>
                <form>
                  <Signin providers={providers} />
                  <div className='flex items-center my-4 mx-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
                    <p className='text-center font-semibold mx-4 mb-0'>Or</p>
                  </div>
                  <LoginForm />
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default Login
