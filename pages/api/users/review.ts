import { NextApiRequest, NextApiResponse } from 'next'
import { Tasks_type } from '@prisma/client'

import { type FormReqData } from '@src/typings'
import { prisma } from '@utils/clients'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id: designationId, quarter } = req.query

    if (![1, 2, 3, 4].includes(parseInt(quarter as string))) {
      res.status(400).send({ error: 'Invalid Value for Quarter Number' })
    }

    try {
      const result = await prisma.reviewTemplates.findFirst({
        where: {
          designation_id: parseInt(designationId as string),
        },
        select: {
          tags: {
            select: {
              ReviewTags: {
                select: {
                  id: true,
                  name: true,
                  description: true,
                },
              },
            },
          },
        },
      })

      const response = result?.tags.map(({ ReviewTags }) => ReviewTags)

      res.status(200).json(response)
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data', err })
    }
  } else if (req.method === 'POST') {
    const { ...data } = req.body as FormReqData
    if (!data) res.status(400).send({ error: 'Provide Complete data' })
    let { userId, session, goals, ...marks } = data

    try {
      Object.entries(marks).map(([key, { rating, reason }]) => {
        if (!rating) Object.assign(marks[key], { rating: 0, reason })
      })

      const reviewerId = await prisma.users.findFirst({
        where: {
          email: session?.user?.email as string,
        },
        select: {
          id: true,
        },
      })

      const review = await prisma.userReviews.create({
        data: {
          user_id: userId,
          marks_received: marks,
          reviewed_by_id: reviewerId?.id,
          is_approved: false,
        },
      })

      const tasks = goals.map(({ description: goal, duration }) => {
        return {
          user_id: userId,
          record_id: review.id,
          description: goal,
          duration: duration,
          assigned_by: 1,
          type: Tasks_type.userReviews,
        }
      })

      await prisma.tasks.createMany({
        data: tasks,
      })

      res.status(201).json('Added review!')
    } catch (error) {
      console.log('error :>> ', error)
      res.status(500).json(error)
    }
  }
}
