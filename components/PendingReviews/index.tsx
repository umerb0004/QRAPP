import axios from 'axios'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import useSwr from 'swr'

import UsersTable from '@comp/PendingReviews/usersTable'

import { usersPerPage } from '@utils/constants'
import { paginationActiveClassses } from '@comp/PendingReviews/style'

const PendingReviews = () => {
  const [userOffset, setItemOffset] = useState(0)

  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, isLoading } = useSwr(`/api/users/`, fetcher)

  const endOffset = userOffset + usersPerPage
  const currentUsers = data?.slice(userOffset, endOffset)
  const pageCount = Math.ceil(data?.length / usersPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % data.length
    setItemOffset(newOffset)
  }

  if (isLoading) return <h1>loading</h1>

  return <>
    <UsersTable currentUsers={currentUsers} />
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
      activeClassName={paginationActiveClassses}
    />
  </>
}

export default PendingReviews
