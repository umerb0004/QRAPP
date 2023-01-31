import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@utils/clients'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const getTags = await prisma.reviewTags.findMany({
      select: {
        id:true,
        name: true,
        description: true,
      },
    })
    res.status(200).json(getTags)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

export default handler
