import { format } from 'date-fns'

import { data } from '@utils/constants/graph'
import MenuSidebar from '@components/menuSidebar'
import PieChart from '@components/pendingReviews/pieChart'
import PaginatedTable from '@components/pendingReviews/pendingReviewTable'
import PageTitle from '@components/pageTitle'


export { getServerSideProps } from '../_app'

const Review = () => (
  <div className='h-full flex flex-row justify-start'>
    <MenuSidebar />
    <div className='h-screen flex-1 p-4 bg-slate-50'>
      <section className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='text-top'>
              <PageTitle title={'Pending Reviews'} />
            </div>
            <div className='items-center text-center'>
              <h1 className='text-top mt-4 my-2'>Fill quarter review of following team members before
                <span className='font-medium text-2xl text-blue-500'> {format(new Date(), 'dd MMMM')}</span>
              </h1>
              <h1 className='my-2'>Their are around 
                <span className='font-medium text-2xl text-blue-500'> 20 </span>
                fouji left for review
              </h1>
            </div>

            <div className='flex justify-between items-center'>
              <div className='items-center text-center'>
                <h6><span className='text-blue-500'>67%</span></h6>
                <h6 className='font-light text-neutral-600'>Reviewed</h6>
              </div>
              <div className='px-4'>
                <PieChart data={data.review.pending} />
              </div>
            </div>
          </div>
        <div className='w-full my-4 overflow-hidden rounded-lg shadow-lg'>
          <div className='w-full overflow-x-auto'>
            <PaginatedTable usersPerPage={10} />
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default Review
