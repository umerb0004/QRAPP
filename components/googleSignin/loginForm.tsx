const LoginForm = () => {
  return (
    <>
      <div className='mb-4'>
        <input
          type='text'
          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focustext-gray-700 focusbg-white focusborder-blue-600 focusoutline-none'
          id='exampleFormControlInput2'
          placeholder='Email address'
          required
        />
      </div>
      <div className='mb-4'>
        <input
          type='password'
          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focustext-gray-700 focusbg-white focusborder-blue-600 focusoutline-none'
          id='exampleFormControlInput2'
          placeholder='Password'
          required
        />
      </div>
      <div className='flex justify-between items-center mb-4'>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checkedbg-blue-600 checkedborder-blue-600 focusoutline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            id='exampleCheck2'
          />
          <label className='form-check-label inline-block text-gray-800'>
            Remember me
          </label>
        </div>
        <a href='#!' className='text-gray-800'>
          Forgot password?
        </a>
      </div>
      <div className='text-center lgtext-left w-full'>
        <button
          type='submit'
          className='inline-block py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focusbg-blue-700 focusshadow-lg focusoutline-none focusring-0 activebg-blue-800 activeshadow-lg transition duration-150 ease-in-out w-full'
        >
          Login
        </button>
        <p className='text-sm font-semibold mt-2 pt-1 mb-0 w-full'>
          Don`t have an account?
          <a
            href='#!'
            className='text-red-600 hover:text-blue-700 focus:text-red-700 transition px-1 duration-200 ease-in-out'
          >
            Register
          </a>
        </p>
      </div>
    </>
  )
}

export default LoginForm

