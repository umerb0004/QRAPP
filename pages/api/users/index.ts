import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const prisma = new PrismaClient()
  try {
    const getUsers = await prisma.users.findMany()
    console.log(getUsers)
    return res.status(200).send(getUsers)
  }
  catch(err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

