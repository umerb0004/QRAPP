
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { RightArrowIcon, LeftArrowIcon } from '../Icons'

import styles from '../../styles/Review.module.css'
import { TableRow } from './row'

export default function PaginatedTable(props, { rowsPerPage = 8 }) {
  const reviews = props.data
  const [rowsOffset, setrowsOffset] = useState(0)

  const endOffset = rowsOffset + rowsPerPage;

  const currentItems = reviews.slice(rowsOffset, endOffset)
  const pageCount = Math.ceil(reviews.length / rowsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * rowsPerPage) % reviews.length;
    setrowsOffset(newOffset)
  }

  return (
    <>
      <RenderRow current_row={currentItems} />
      <div className={styles.paging_nav}>
        <ReactPaginate
          className={styles.pagination_nav}
          breakLabel='...'
          nextLabel={<RightArrowIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          pageClassName={styles.pagination_page_number}
          activeLinkClassName= {styles.active_page}
          marginPagesDisplayed={2}
          previousLabel={<LeftArrowIcon />}
        />
      </div>
    </>
  );
}

function RenderRow(props) {
  const reviews = props.current_row
  const rows = reviews.map((review) => {
    return <TableRow data={review} key={review.id} />
  })

  return rows
}
