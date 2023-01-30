import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Image from 'next/image'

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
      {(currentData && currentData.length !== 0) ? (
        <>
          <div className='w-full my-8 overflow-hidden rounded-lg shadow-lg'>
            <div className='w-full overflow-x-auto'>
              <Table currentData={currentData} currentUser={currentUser} />
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
              activeClassName={paginationActiveClassses} />
            </div>
          </div>
        </>
      ) : (
        <div className='flex items-center justify-center custom-height'>
          <Image className='h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src='/placeholder.png' alt='image description' width={500} height={500}/>
        </div>

      )}
    </>
}

export default Pagination
