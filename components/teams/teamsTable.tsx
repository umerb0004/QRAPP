import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import useSwr from 'swr'
import { useSession } from 'next-auth/react'

import { usersProps } from '@src/typings'

interface Props {
  teamMembers: usersProps[]
}

const Teams = ({ teamMembers }: Props) => {
  return (
    <>
      <div className='grid place-items-center'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='text-md text-gray-700 bg-gray-100 border-gray-600 '>
              <th scope='col' className='py-3 px-6'>
                SR#
              </th>
              <th scope='col' className='py-3 px-6'>
                Employee ID
              </th>
              <th scope='col' className='py-3 px-6'>
                Name
              </th>
              <th scope='col' className='py-3 px-6'>
                Designation
              </th>
              <th scope='col' className='py-3 px-6'>
                Email
              </th>
              <th scope='col' className='py-3 px-6'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='bg-white'>
            {teamMembers ? (
              teamMembers.map((user, index) => (
                <tr
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  key={user.id}
                >
                  <td className='py-4 px-6'>{index+1}</td>
                  <td className='py-4 px-6'>{user.employee_id}</td>
                  <td className='py-4 px-6'>
                    {user.first_name} {user.last_name}
                  </td>
                  <td className='py-4 px-6'>{user.Designations.name}</td>
                  <td className='py-4 px-6'>{user.email}</td>
                  <td className='py-4 px-6'>{`${user.on_leave ? 'on Leave' : 'On Duty'}`}</td>
                </tr>
              ))
            ) : (
              <p className='text-4xl'>No Data Exist</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

const PaginatedTable = ({ usersPerPage = 10 }: { usersPerPage?: number }) => {
  const { data: session } = useSession()
  let email: string = ''

  if (session) email = session!.user?.email!
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, isLoading } = useSwr(`/api/teams/${email}`, fetcher)
  const [userOffset, setItemOffset] = useState(0)

  if (isLoading) return <h1>loading</h1>

  const endOffset = userOffset + usersPerPage
  const teamMembers = data?.slice(userOffset, endOffset)
  const pageCount = Math.ceil(data?.length / usersPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % data.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <Teams teamMembers={teamMembers} />
      <ReactPaginate
        className='flex justify-end py-4'
        nextLabel=' >'
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel='< '
        pageClassName='page-item px-1 mx-1'
        pageLinkClassName='page-link'
        previousClassName='page-item px-2 mx-2'
        previousLinkClassName='page-link'
        nextClassName='page-item px-2 mx-2'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active bg-gray-500 px-4 mx-1 text-white rounded-sm'
      />
    </>
  )
}

export default PaginatedTable
