import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@utils/clients'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body.weightage
    const updatedWeightage = data.map(
      async (item) => {
        await prisma.templateOnTags.update({
          where: {
            id: item.id
          },
          data: {
            weightage: item.weightage,
          },

        })
      }
    )
    res.status(200).json(updatedWeightage)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

export default handler
