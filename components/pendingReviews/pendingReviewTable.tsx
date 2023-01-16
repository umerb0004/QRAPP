import axios from 'axios'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import useSwr from 'swr'

import ReviewFormModal from '@components/ReviewFormModal'
import { usersProps } from '@src/typings'

interface Props {
  currentUsers: usersProps[]
}

interface PaginatedTableProps {
  usersPerPage: number
}

const Users = ({ currentUsers }: Props) => (
  <div className='overflow-x-auto relative shadow-md'>
    <table className='w-full text-sm text-gray-500 dark:text-gray-400 text-center'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th scope='col' className='text-left py-3 px-6'>
            Name
          </th>
          <th scope='col' className='py-3 px-6'>
            Join Date
          </th>
          <th scope='col' className='py-3 px-6'>
            Designation
          </th>
          <th scope='col' className='py-3 px-6'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {currentUsers ? (
          currentUsers.map((user) => (
            <tr
              key={user.id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
            >
              <td className='py-4 px-6'>
                <div className='flex items-center text-sm'>
                  <div className='relative w-8 h-8 mr-3 rounded-full md:block'>
                    <img
                      className='object-cover w-full h-full rounded-full'
                      src={user.profile_pic}
                      alt=''
                      loading='lazy'
                    />
                    <div
                      className='absolute inset-0 rounded-full shadow-inner'
                      aria-hidden='true'
                    ></div>
                  </div>
                  <div className='text-left'>
                    <p className=' text-black'>
                      {user.first_name + ' ' + user.last_name}{' '}
                    </p>
                    <p className='text-xs text-gray-600'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td className='py-4 px-6'>{user.joining_date.split('', 10)}</td>
              <td className='py-4 px-6'>{user.Designations.name}</td>
              <td className='py-4 px-6'>
                <ReviewFormModal
                  id={parseInt(user.id)}
                  designation_id={user.designation_id}
                  first_name={user.first_name}
                  last_name={user.last_name}
                  email={user.email}
                  profile_pic={user.profile_pic}
                />
              </td>
            </tr>
          ))
        ) : (
          <p className='text-4xl'>No Data Exist</p>
        )}
      </tbody>
    </table>
  </div>
)

const PaginatedTable = ({ usersPerPage }: PaginatedTableProps) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, isLoading } = useSwr(`/api/users/`, fetcher)
  const [userOffset, setItemOffset] = useState(0)

  const endOffset = userOffset + usersPerPage
  const currentUsers = data?.slice(userOffset, endOffset)
  const pageCount = Math.ceil(data?.length / usersPerPage)
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % data.length
    setItemOffset(newOffset)
  }
  if (isLoading) return <h1>loading</h1>

  return (
    <>
      <Users currentUsers={currentUsers} />
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
