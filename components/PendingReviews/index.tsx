import axios from 'axios'
import useSwr from 'swr'
import Pagination from '../pagination'

import UsersTable from '@comp/PendingReviews/usersTable'

import { useSession } from 'next-auth/react'
import ReviewDetails from './reviewDetails'

const PendingReviews = () => {


  const { data: session } = useSession()
  let email: string = ''

  if (session) email = session!.user?.email!
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, isLoading } = useSwr(`/api/pendingReviews/${email}`, fetcher)

  if (isLoading) return <h1>loading</h1>
  const { usersToShow, reviewedByCurrentUser, currentUser } = data!

  return <>
    <ReviewDetails count = {usersToShow.length} graphData = {[reviewedByCurrentUser.length, usersToShow.length]}/>
    <div className='rounded-lg shadow-lg'>
      <Pagination table={UsersTable} usersToShow={usersToShow} currentUser={currentUser}/>
   </div>
  </>
}

export default PendingReviews
