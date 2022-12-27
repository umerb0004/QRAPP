import { FormEventHandler, useState } from 'react'
import { signIn } from 'next-auth/react'
import Signin from './signIn'

interface FormProps {
  providers: {
    id: string
    name: string
  }[]
}

const LoginForm = ({ providers }: FormProps) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      form_email: userInfo.email,
      form_password: userInfo.password,
      redirect: false,
    })
    if (res?.status === 401) {
      alert('Password or Email is Incorrect')
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Signin providers={providers} />
        <div className='flex items-center my-4 mx-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
          <p className='text-center font-semibold mx-4 mb-0'>Or</p>
        </div>
        <div className='mb-6'>
          <input
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            type='email'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focustext-gray-700 focusbg-white focusborder-blue-600 focusoutline-none'
            id='email'
            placeholder='Email address'
            required
          />
        </div>
        <div className='mb-6'>
          <input
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
            type='password'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focustext-gray-700 focusbg-white focusborder-blue-600 focusoutline-none'
            id='password'
            placeholder='Password'
            required
          />
        </div>
        <div className='flex justify-between items-center mb-6'>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input appearance h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-grey-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              id='check'
            />
            <label className='form-check-label inline-block text-sm text-gray-800'>
              Remember me
            </label>
          </div>
          <a href='#!' className='text-gray-800 text-sm'>
            Forgot password?
          </a>
        </div>
        <div className='text-center lgtext-left w-full'>
          <button
            onClick={() => handleSubmit}
            className='inline-block px-48 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:bg-blue-500 hover:shadow-lg focusbg-blue-700 focusshadow-lg focusoutline-none focusring-0 activebg-blue-800 activeshadow-lg transition duration-150 ease-in-out w-full'
          >
            Login
          </button>
        </div>
      </form>
    </>
  ) 
}

export default LoginForm
