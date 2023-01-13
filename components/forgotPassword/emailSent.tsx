import Link from 'next/link'

const EmailSent = ({ email }: { email: string }) => (
  <div className='container mx-auto'>
    <div className='flex justify-center items-center h-screen md:px-36'>
      <div className='w-full lg:w-1/2  py-5 rounded-lg bg-slate-100'>
        <div className='px-4 mb-4 text-center'>
          <h3 className='pt-4 mb-6 text-2xl'>Mail Sent</h3>
          <p className='mb-4 text-sm text-gray-700 lg:px-10'>
            An email has been sent to <b>{email}</b>. Please follow
            instructions in the mail to reset your password.
          </p>
        </div>
        <div className='mb-10 text-center lg:px-10'>
          <hr className='mb-6 border-t lg:px-10' />
          <Link href='/'>
            <button
              className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:outline-none focus:shadow-outline'
              type='button'
            >
              Procced to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default EmailSent
