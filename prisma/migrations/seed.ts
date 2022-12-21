import { PrismaClient } from '@prisma/client'
// import { tags } from '../../dummyData/tags'

// import { departments } from '../../dummyData/department'
// import { designations } from '../../dummyData/designation'
// import { users } from '../../dummyData/users'

const prisma = new PrismaClient()

const main = async () => {
  // await prisma.users.createMany({
  //   data: users,
  // })

  // await prisma.departments.createMany({
  //   data: departments,
  // })

  // await prisma.designations.createMany({
  //   data: designations,
  // })

  // await prisma.reviewTags.createMany({
  //   data: tags
  // })
}

main().catch(() => {
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
