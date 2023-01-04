import { format } from 'date-fns'

import DoughNut from '../components/pendingReviews/chart'
import { data } from '../dummyData/pendingReviewChart'
import MenuSidebar from '../components/MenuSidebar'
import PaginatedTable from '../components/pendingReviews/pendingReviewTable'

const Review = () => {
  let today = format(new Date(), 'dd/MM/yyyy')

  return <>
    <div className='h-full flex flex-row justify-start'>
      <MenuSidebar />
      <div className='h-screen flex-1 p-4 bg-slate-50'>
        <section className='container mx-auto p-6'>
          <div>
            <p className='text-4xl font-bold my-5'>Pending Reviews</p>
          </div>
          <div className='flex justify-between'>
            <div className='py-6'>
              <p className='my-6'>
                <b className='font-bold'>Due Date :</b> {today}
              </p>
              <p>
                <b className='font-bold'>Total :</b> 20
              </p>
            </div>
            <div className='lg:-mt-8'>
              <DoughNut data={data} />
            </div>
          </div>
          <div className='w-full my-8 overflow-hidden rounded-lg shadow-lg'>
            <div className='w-full overflow-x-auto'>
              <PaginatedTable usersPerPage={10} />
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
}


export default Review
