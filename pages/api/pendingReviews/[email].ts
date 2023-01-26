import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@utils/clients'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.query

  try {
    const currentUser = await prisma.users.findUnique({
      where: {
        email: email as string,
      },
      select: {
        id: true,
      }
    })

    const teams = await prisma.users.findMany({
      where: {
        lead_id: parseInt(currentUser!.id),
      },
      select: {
        id: true,
        lead_id:true,
        first_name: true,
        last_name: true,
        email: true,
        profile_pic: true,
        on_leave: true,
        joining_date: true,
        employee_id: true,
        Designations: {
          select: {
            name: true,
          }
        },
      }
    })

    const users = await prisma.users.findMany({ select: {
      id: true,
      lead_id:true,
      first_name: true,
      last_name: true,
      email: true,
      profile_pic: true,
      on_leave: true,
      joining_date: true,
      employee_id: true,
      Designations: {
        select: {
          name: true,
        }
      },
    }})


    const currentTime = new Date()
    const currentQuarter = Math.floor((currentTime.getMonth() + 3) / 3)
    const currentYear = currentTime.getFullYear()
    const userTeamIds = teams.map(user => parseInt(user.id))

    const userReview = await prisma.userReviews.findMany({
      where:{
      quarter_no: currentQuarter,
      OR:[{reviewed_by_id:{in: userTeamIds}},{reviewed_by_id:parseInt(currentUser!.id)}],
      year_no: currentYear
      },
      select: {
        user_id: true,
        reviewed_by_id: true,
      },
    })

    const reviewedUserIds = Array.from(new Set(userReview.map(user => parseInt(user.user_id))))
    let reviewedByCurrentUser = userReview.filter(user => user.reviewed_by_id === parseInt(currentUser!.id))
    const idsToDelete = reviewedByCurrentUser.map(user => parseInt(user.user_id))
    const reviewedByTeam = (reviewedUserIds.map(userId => users.filter(user => (user.id === userId.toString() && !(userTeamIds.includes(userId)))))).filter(object=>object.length)
    const allUsers= teams.concat(reviewedByTeam.flat())
    const usersToShow =allUsers.filter(user => !(idsToDelete.includes(parseInt(user.id))))

    const result = {
      usersToShow,
      reviewedByCurrentUser,
      currentUser
    }
    
    res.status(200).json(result)
    if (!result) {
      return res.status(404).send(null)
    }
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data', err })
  }
}
