import { GetServerSideProps } from 'next'

import { prisma } from '@utils/clients'
import { MenuSidebar, ReviewForm } from 'components'
import { type ReviewPageProps as Props } from '@src/typings'
import { getSession } from 'next-auth/react'

const UserReview = (props: Props) => {
  return (
    <div className='flex'>
      <MenuSidebar />
      <ReviewForm {...props} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const { params } = context
  const { userId } = params!

  const user = await prisma.users.findUnique({
    where: {
      id: parseInt(userId as string),
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      profile_pic: true,
      designation_id: true,
    },
  })

  const userReview = await prisma.userReviews.findFirst({
    where: {
      user_id: parseInt(userId as string),
    },
    select: {
      id: true,
      marks_received: true,
      quarter_no: true,
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 1,
  })
  if (!userReview) {
    const quarterReview = {
      Tasks: [],
      marks_received: {},
      quarter_no: 0,
    }
    return {
      props: {
        user,
        quarterReview,
      },
    }
  }

  const Tasks = await prisma.tasks.findMany({
    where: {
      record_id: userReview!.id,
    },
    select: {
      description: true,
      duration: true,
    },
  })

  const quarterReview = {
    Tasks,
    ...userReview,
  }

  return {
    props: {
      user,
      quarterReview,
    },
  }
}

export default UserReview
