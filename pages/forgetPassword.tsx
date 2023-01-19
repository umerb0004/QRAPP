import { FormEventHandler, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import BackToLogin from '@comp/ForgotPassword/link'
import EmailSent from '@comp/ForgotPassword/emailSent'

const Forget = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState(0)
  const fieldEmpty = () => {
    setState(0)
    setEmail('')
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    try {
      const user = await fetch(`http://localhost:3000/api/users/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
      if (user.status == 200) {
        try {
          setState(1)
          const res = await fetch(
            'http://localhost:3000/api/forgetPswrdEmail',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: email }),
            }
          )
          if (res.ok) {
            setEmail('')
          }
        } catch (error) {
          toast.error('Internal Server Error')
          console.log(error)
        }
      } else {
        fieldEmpty()
        toast.error('User Doesn`t Exists')
      }
    } catch (error) {
      fieldEmpty()
    }
  }

  return state === 0 ? <>
    <div className='container mx-auto'>
      <div className='flex justify-center items-center h-screen md:px-36'>
        <div className='w-full lg:w-1/2  py-5 rounded-lg bg-slate-100'>
          <div className='px-4 mb-4 text-center'>
            <h3 className='pt-4 mb-2 text-2xl'>Forgot Your Password?</h3>
            <p className='mb-4 text-sm text-gray-700 lg:px-10'>
              We get it, stuff happens. Just enter your email address below
              and we`ll send you a link to reset your password!
            </p>
          </div>
          <form
            className='px-8 pt-6 mb-4 bg-slate-100 rounded'
            onSubmit={handleSubmit}
          >
            <div className='mb-4 lg:px-10'>
              <label
                className='block mb-2 text-sm font-bold text-gray-700'
                htmlFor='email'
              >
                Email
              </label>
              <input
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value)
                }}
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Enter Email Address...'
                required
              />
            </div>
            <div className='mb-6 text-center lg:px-10'>
              <button
                className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Reset Password
              </button>
              <ToastContainer />
            </div>
            <BackToLogin />
          </form>
        </div>
      </div>
    </div>
  </>
  : 
  <EmailSent email={email} />
}

export default Forget
