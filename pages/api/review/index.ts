import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@utils/clients'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.templateOnTags.findMany()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

export default handler
