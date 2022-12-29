import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: String(req.query.email),
      },
    })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}