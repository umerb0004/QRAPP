import { FormEventHandler, useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GoogleSignin from '@comp/Signin/googleSignin'

import { SigninProps } from '@src/typings'
import {
  or, input, rememberMe,
  rememberMeLabel, signinButton,
} from '@comp/Signin/styles'



const SigninForm = ({ providers }: SigninProps) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const notify = () => { toast.error('Incorrect Email or Password') }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    const res = await signIn('credentials', {
      form_email: user.email,
      form_password: user.password,
      redirect: false,
    })

    if (res?.status === 401) notify()
  }

  return <>
    <form onSubmit={handleSubmit}>
      <GoogleSignin providers={providers} />
      <div className={or}>
        <p className='text-center font-semibold mx-4 mb-0'>Or</p>
      </div>
      <div className='mb-6'>
        <input
          id='email'
          type='email'
          className={input}
          placeholder='Email address'
          value={user.email}
          onChange={({ target }) => setUser({ ...user, email: target.value })}
          required
        />
      </div>
      <div className='mb-6'>
        <input
          id='password'
          type='password'
          className={input}
          placeholder='Password'
          value={user.password}
          onChange={({ target }) => setUser({ ...user, password: target.value })}
          required
        />
      </div>
      <div className='flex justify-between items-center mb-6'>
        <div className='form-group form-check'>
          <input type='checkbox' id='check' className={rememberMe} />
          <label className={rememberMeLabel}>
            Remember Me
          </label>
        </div>
        <Link href='/forgetPassword' className='text-gray-800 text-sm hover:text-blue-500'> Forgot password?</Link>
      </div>
      <div className='text-center lgtext-left w-full'>
        <button onClick={() => handleSubmit} className={signinButton}>
          Sign In
        </button>
        <ToastContainer />
      </div>
    </form>
  </>
}

export default SigninForm
