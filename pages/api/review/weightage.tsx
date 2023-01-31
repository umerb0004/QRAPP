import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@utils/clients'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.body.designation
    const reviewTempleteID = await prisma.reviewTemplates.findFirst(
      {
        where: {
          designation_id: id
        },
        select: {
          id: true
        }
      }
    )
    if (reviewTempleteID?.id) {

      const data = await prisma.templateOnTags.findMany(
        {
          where: {
            review_temp_id: reviewTempleteID.id,
          }
        }
      )
      res.status(200).json({ weight: data, reviewID: reviewTempleteID })
    }
    else {
      res.status(200).json({ weight: [] })
    }

  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}

export default handler
