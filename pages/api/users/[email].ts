import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query
  const prisma = new PrismaClient()
  
  try {
    const userData = await prisma.users.findUnique({
      where: {
        email: email as string,
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        profile_pic: true,
        manager_id: true,
        lead_id: true,
        Designations: {
          select: {
            name: true,
          },
        },
      },
    })

    const manager = await prisma.users.findUnique({
      where: {
        id: userData!.manager_id.toString(),
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        profile_pic: true,
      },
    })

    const lead = await prisma.users.findUnique({
      where: {
        id: userData!.manager_id.toString(),
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        profile_pic: true,
      },
    })
    
    const team = await prisma.users.findMany({
      where: {
        lead_id: userData!.lead_id,
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        profile_pic: true,
      },
    })

    const result = {
      userData,
      manager,
      lead,
      team,
    }

    res.status(200).json(result)
    if (!userData) {
      return res.status(404).send(null)
    }
    res.status(200).send(userData)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}
