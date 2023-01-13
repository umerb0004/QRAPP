// import { getToken } from 'next-auth/jwt'

// const body = `Trouble signing in? <br>Resetting your password is easy.
// Just click the link below and follow the instructions. We’ll have you up and running in no time.
// <a className='bg-blue-500' href='http://localhost:3000/resetPassword${getToken}'>Reset Password Link</a>
// <br>If you did not make this request then please ignore this email.`

const template =({email}:never) =>(`<div>
    <p className='text-center'>Trouble signing in? <br>Resetting your password is easy.
    Just click the link below and follow the instructions. We’ll have you up and running in no time.
    <a className='bg-blue-500' href='http://localhost:3000/resetPassword${email}'>Reset Password Link</a>
    <br>If you did not make this request then please ignore this email.</p>
  </div>`)

  export default template
