import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import useSwr from 'swr'
import axios from 'axios'

import { usersPerPage } from '@utils/constants'
import { paginationActiveClassses } from '@comp/PendingReviews/style'

const Pagination = ({table: Table,apiAddress}) => {
  const [userOffset, setItemOffset] = useState(0)

  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, isLoading } = useSwr(apiAddress, fetcher)
  if (isLoading) return <h1>loading</h1>

  const endOffset = userOffset + usersPerPage
  const currentData = data?.slice(userOffset, endOffset)
  const pageCount = Math.ceil(data?.length / usersPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % data.length
    setItemOffset(newOffset)
  }

  return <>
      <Table currentData={currentData} />
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

export default Pagination
