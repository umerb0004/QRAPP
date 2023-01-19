import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@utils/clients'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const getUsers = await prisma.users.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        joining_date: true,
        profile_pic: true,
        designation_id: true,
        Designations: {
          select: {
            name: true,
          },
        },
      },
    })
    res.status(200).json(getUsers)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

export default handler
