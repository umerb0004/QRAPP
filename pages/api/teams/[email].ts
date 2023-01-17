import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query
  const prisma = new PrismaClient()

  try {
    const currentUser = await prisma.users.findUnique({
      where: {
        email: email as string,
      },
      select: {
        lead_id: true,
      }
    })

    const teams = await prisma.users.findMany({
      where: {
        lead_id: currentUser!.lead_id,
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
          }
        },
      }
    })

    res.status(200).json(teams)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}
