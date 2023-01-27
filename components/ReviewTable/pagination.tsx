import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import TableRow from '@comp/ReviewTable/row'

import { RightArrowIconStyled, LeftArrowIcon } from '@public/Icons'
import styles from '@styles/Review.module.css'

const PaginatedTable = ({ reviews }, { rowsPerPage = 8 }) => {
  const [rowsOffset, setrowsOffset] = useState(0)
  const endOffset = rowsOffset + rowsPerPage
  const currentItems = reviews.slice(rowsOffset, endOffset)
  const pageCount = Math.ceil(reviews.length / rowsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * rowsPerPage) % reviews.length
    setrowsOffset(newOffset)
  }

  return (
    <>
      {currentItems?.map((review) => (
        <TableRow data={review} key={review.id} />
      ))}
      <div className={styles.paging_nav}>
        <ReactPaginate
          className={styles.pagination_nav}
          breakLabel='...'
          nextLabel={<RightArrowIconStyled />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          pageClassName={styles.pagination_page_number}
          activeLinkClassName={styles.active_page}
          marginPagesDisplayed={2}
          previousLabel={<LeftArrowIcon />}
        />
      </div>
    </>
  )
}

export default PaginatedTable
