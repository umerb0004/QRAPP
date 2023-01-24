import dynamic from 'next/dynamic'

const PaginatedTable = dynamic(() => import('@comp/ReviewTable/pagination'), { ssr: false })

import { reviewsTableHeaders } from '@utils/constants'
import { SearchSvg } from '@public/Icons'
import {
  reviewsHeadingClasses, searchSvgBoxClassses, searchInputClasses,
  reviewTableClasses, reviewTableHeadsClasses,
} from '@comp/ReviewTable/style'

const ReviewTable = ({ data: usersReviews }) => (
  <div className='h-full flex-1 p-4 bg-slate-50'>
    <h3 className={reviewsHeadingClasses}>Reviews</h3>
    <div className='relative shadow-md sm:rounded-lg'>
      <div className='pb-4 dark:bg-gray-900'>
        <div className='relative float-right p-2'>
          <div className={searchSvgBoxClassses}>
            <SearchSvg />
          </div>
          <input
            type='text'
            id='table-search-users'
            className={searchInputClasses}
            placeholder='Search for users' />
        </div>
      </div>
      <table className={reviewTableClasses}>
        <thead className={reviewTableHeadsClasses}>
          <tr>
            <th scope='col' className='p-4'></th>
            {reviewsTableHeaders?.map((header, index) => (
              <th scope='col' className='py-3 px-6' key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <PaginatedTable reviews={usersReviews} />
        </tbody>
      </table>
    </div>
  </div>
)

export default ReviewTable
