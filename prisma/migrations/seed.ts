import { PrismaClient } from '@prisma/client'

import { departments } from '../../dummyData/department'
import { designations } from '../../dummyData/designation'
import { reviewTemplate } from '../../dummyData/reviewTemplates'
import { tags } from '../../dummyData/tags'
import { templateTags } from '../../dummyData/templateTags'
import { userReview } from '../../dummyData/userReview'
import { users } from '../../dummyData/users'

const prisma = new PrismaClient()

const main = async () => {

  await prisma.departments.createMany({
    data: departments,
  })

  await prisma.designations.createMany({
    data: designations,
  })

  await prisma.users.createMany({
    data: users,
  })

  await prisma.reviewTags.createMany({
    data: tags
  })

  await prisma.userReviews.createMany({
    data: userReview
  })

  await prisma.reviewTemplates.createMany({
    data: reviewTemplate
  })
  
  await prisma.templateOnTags.createMany({
    data: templateTags
  })
}

main().catch(() => {
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
