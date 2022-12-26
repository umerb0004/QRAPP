import { template } from '../templates/emailTemplate'

const cron = require('node-cron')
const sendMail = require('@sendgrid/mail')

const { NEXT_PUBLIC_SG_API_KEY, NEXT_PUBLIC_FROM_EMAIL } = process.env
const leads = ['fareed.murtaza@devsinc.com']
sendMail.setApiKey(NEXT_PUBLIC_SG_API_KEY)

export default function handler() {
  cron.schedule('* * * * *', async function () {
    try {
      const emailInfo = {
        to: leads,
        from: NEXT_PUBLIC_FROM_EMAIL,
        subject: `Quaterly Review App`,
        html: `${template}`,
      }

      await sendMail.sendMultiple(emailInfo)
    } catch (error) {
      console.log(error)
    }
  })
}
