import { Get } from '@utils/axios'

const sendMail = require('@sendgrid/mail')
const { NEXT_PUBLIC_SG_API_KEY, NEXT_PUBLIC_FROM_EMAIL } = process.env
const leads = ['fareed.murtaza@devsinc.com']

sendMail.setApiKey(NEXT_PUBLIC_SG_API_KEY)

let data: {'first_name': string, 'last_name': string; 'designation': string, 'email': string }[] = []

const handler = async () => {
  var today = new Date()
  var quarter = Math.floor(today.getMonth() / 3)
  const startFullQuarter = new Date(today.getFullYear(), quarter * 3, 1)
  const endFullQuarter = new Date(startFullQuarter.getFullYear(), startFullQuarter.getMonth() + 3, 0)

  await Get('http://localhost:3000/api/getData').then(response => {
    data = response.data
  })

  const emailInfo = {
    to: leads,
    from: NEXT_PUBLIC_FROM_EMAIL,
    subject: `Quaterly Review App`,
    templateId: 'd-00d5eee325a24176b2ae58363a6983b4',
    dynamic_template_data: {
      data: data,
      date: endFullQuarter.toDateString().slice(4,)
    }
  }

  await sendMail.send(emailInfo)

  .catch((error: unknown) => {
    console.log('ERRRRR: ', error)
  })
}

export default handler
