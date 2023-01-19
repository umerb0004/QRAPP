import Link from 'next/link'

const BackToLogin = () => {
  return  <>
    <div className='text-center'>
    <hr className='w-full mb-4 border-t' />
    <Link
        className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
        href='/'
    >
        Back to Login
    </Link>
    </div>
  </>
}

export default BackToLogin
