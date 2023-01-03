import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const prisma = new PrismaClient()
    const getUsers = await prisma.users.findMany()
    return res.status(200).send(getUsers)
  }
  catch(err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

export default handler
