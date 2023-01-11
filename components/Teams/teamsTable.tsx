import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import useSwr from 'swr'

const Teams = ({Users: Users}) => {
  return <>
    <div className='grid place-items-center'>
       <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr className='text-md text-gray-700 bg-gray-100 border-gray-600 '>
            <th scope='col' className='py-3 px-6'>ID</th>
            <th scope='col' className='py-3 px-6'>Name</th>
            <th scope='col' className='py-3 px-6'>Designation</th>
            <th scope='col' className='py-3 px-6'>Email</th>
            <th scope='col' className='py-3 px-6'>Status</th>
          </tr>
        </thead>

        <tbody className='bg-white'>
          {Object.keys(Users).map(key => (
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={key}>
              <td className='py-4 px-6'>{Users[key].id}</td>
              <td className='py-4 px-6'>{Users[key].first_name} {Users[key].last_name}</td>
              <td className='py-4 px-6'>{Users[key].Designations.name}</td>
              <td className='py-4 px-6'>{Users[key].email}</td>
              <td className='py-4 px-6'>Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
}

const PaginatedTable = ({ usersPerPage=10 }: {usersPerPage?: number}) => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, isLoading } = useSwr(`/api/getData/`, fetcher)
  const [userOffset, setItemOffset] = useState(0)

  const endOffset = userOffset + usersPerPage
  const currentUsers = data?.slice(userOffset, endOffset)
  const pageCount = Math.ceil(data?.length / usersPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % data.length
    setItemOffset(newOffset)
  }

  if (isLoading) return <h1>loading</h1>

  return <>
    <Teams Users={currentUsers}/>
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
}

export default PaginatedTable
