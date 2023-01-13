import { encode } from 'js-base64'
import sendgrid from '@sendgrid/mail'

const { NEXT_PUBLIC_SG_API_KEY, NEXT_PUBLIC_FROM_EMAIL, JWT_SECRET } =
  process.env
sendgrid.setApiKey(NEXT_PUBLIC_SG_API_KEY as string)

const email = async (req: { body: { email: string } }) => {
  let encrypt = encode(`${req.body.email}`)
  const url = `http://localhost:3000/resetPassword/${JWT_SECRET}/${encrypt}`
  try {
    const emailInfo = {
      to: `${req.body.email}`,
      from: NEXT_PUBLIC_FROM_EMAIL as string,
      subject: `Reset Password Requested`,
      html: `<div>
        <p className='text-center'>Trouble signing in? <br>Resetting your password is easy.
        Just click the link below and follow the instructions. We’ll have you up and running in no time.
        <a className='bg-blue-500' href='${url}'>Reset Password Link</a>
        <br>If you did not make this request then please ignore this email.</p>
      </div>`,
    }
    await sendgrid.send(emailInfo)
    
  } catch (error) {
    console.log(error)
  }
}
export default email

