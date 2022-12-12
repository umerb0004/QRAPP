import { PrismaClient } from '@prisma/client'

import { users } from '../../dummyData/users'

const prisma = new PrismaClient()

async function main() {
  await prisma.users.createMany({
    data: users
  })
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
