import { NextApiResponse } from 'next'

import { prisma } from '@utils/clients'

export default async function handler(
  req: { body: { email: string; password: string } },
  res: NextApiResponse
) {
  try {
    const updatedUser = await prisma.users.update({
      where: { email: req.body.email },
      data: { password: req.body.password },
    })
    res.status(200).send(updatedUser)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}
