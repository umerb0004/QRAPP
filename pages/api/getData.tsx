import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {  
  try {
    const prisma = new PrismaClient()

    const getEmail = await prisma.users.findMany({
      where: {
        email: {
          contains: '@devsinc.com'
        }
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        Designations: {
          select: {
            name: true,
          }
        },
      }
    })
    
    return res.status(200).send(getEmail)
  }
  catch(err) {
    console.log('Error', err)
  }
}

export default handler
