import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@utils/clients'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query

  try {
    const currentUser = await prisma.users.findUnique({
      where: {
        email: email as string,
      },
      select: {
        id: true,
      },
    })

    const teams = await prisma.users.findMany({
      where: {
        lead_id: parseInt(currentUser!.id),
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        on_leave: true,
        employee_id: true,
        Designations: {
          select: {
            name: true,
          },
        },
      },
    })

    res.status(200).json(teams)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}
