import { decode } from 'js-base64'
import { FormEventHandler, useState } from 'react'
import Router from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import BackToLogin from '../../../components/ForgotPassword/link'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confrimPassword, setConfrimPassword] = useState('')
  const fieldEmpty = () => {
    setPassword('')
    setConfrimPassword('')
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    const email = decode(Router.query.cipher[0])
    if (password !== confrimPassword) {
      toast.error('Password didn`t match')
      fieldEmpty()
    } else {
      try {
        const updatedUser = await fetch(
          `http://localhost:3000/api/users/updatePassword/${email}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
          }
        )
        if (updatedUser.ok) {
          fieldEmpty()
          Router.push('/')
        } else {
          toast.error('Failed to update password')
          fieldEmpty()
        }
      } catch {
        toast.error('Internal Server Error')
        fieldEmpty()
      }
    }
  }

  return <>
    <div className='container mx-auto'>
      <div className='flex justify-center items-center h-screen md:px-36'>
        <div className='w-full lg:w-1/2 py-3 rounded-lg bg-slate-100'>
          <div className='px-4 mb-2 text-center'>
            <h3 className='pt-2 mb-2 text-2xl'>New Password</h3>
            <p className='mb-2 text-sm text-gray-700 lg:px-10'>
              Create your password and proceed!
            </p>
          </div>
          <form
            className='px-8 pt-6 mb-3 bg-slate-100 rounded'
            onSubmit={handleSubmit}
          >
            <div className='mb-3 lg:px-10'>
              <label
                className='block mb-1 text-sm font-bold text-gray-700'
                htmlFor='password'
              >
                Password
              </label>
              <input
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value)
                }}
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Enter Password'
                required
              />
            </div>
            <div className='mb-3 lg:px-10'>
              <label
                htmlFor='confirmPassword'
                className='block mb-1 text-sm font-bold text-gray-700'
              >
                Confirm password
              </label>
              <input
                type='password'
                name='confrimPassword'
                id='confrimPassword'
                value={confrimPassword}
                onChange={({ target }) => {
                  setConfrimPassword(target.value)
                }}
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                placeholder='Confirm Password'
                required={true}
              />
            </div>
            <div className='mb-3 text-center lg:px-10'>
              <button
                className='w-full px-4 py-2 my-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Password
              </button>
              <ToastContainer />
            </div>
            <BackToLogin/>
          </form>
        </div>
      </div>
    </div>
  </>
}

export default ResetPassword


