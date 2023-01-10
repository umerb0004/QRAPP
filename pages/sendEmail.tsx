import { Get } from '@utils/axios'

const sendEmail = () => (
  <button className='ml-10 bg-teal-400 text-white text-md font-medium h-10 mt-5 border border-teal-600 rounded w-1/5' 
    onClick={() => Get('http://localhost:3000/api/email')}>
    Send Email
  </button>
)

export default sendEmail
