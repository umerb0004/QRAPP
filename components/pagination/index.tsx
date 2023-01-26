import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { usersPerPage } from '@utils/constants'
import { paginationActiveClassses } from '@comp/PendingReviews/style'
import { currentUser, usersProps } from '@src/typings'


interface props{
  table: React.ElementType,
  usersToShow: usersProps[],
  currentUser?: currentUser
}

const Pagination = ({table: Table,usersToShow,currentUser}:props) => {
  const [userOffset, setItemOffset] = useState(0)

  const endOffset = userOffset + usersPerPage
  const currentData = usersToShow?.slice(userOffset, endOffset)
  const pageCount = Math.ceil(usersToShow?.length / usersPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * usersPerPage) % usersToShow.length
    setItemOffset(newOffset)
  }

  return <>
      <Table currentData={currentData} currentUser={currentUser}/>
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
