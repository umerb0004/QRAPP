import { format } from 'date-fns'

import { data } from '@utils/constants/graph'
import PieChart from './chart'

const currentTime = new Date()
const lastMonth = Math.floor((currentTime.getMonth() + 3) / 3) * 3
const lastDate = new Date(currentTime.getFullYear(), lastMonth, 0)

const ReviewDetails = ({ count, graphData }) => (
  <>
    <div className='items-center text-center'>
      <h1 className='text-top mt-4 my-2'>
        Fill quarter review of following team members before
        <span className='font-medium text-2xl text-blue-500'>
          {format(lastDate, ' dd MMMM')}
        </span>
      </h1>
      <h1 className='my-2'>
        There are around
        <span className='font-medium text-2xl text-blue-500'> {count} </span>
        resources left for review and approval
      </h1>
    </div>
    <div className='flex justify-end items-center'>
      <div className='items-center text-center'>
        <h6>
          <span className='text-blue-500'>{Math.floor((graphData[0]/graphData[1])*100)} %</span>
        </h6>
        <h6 className='font-light text-neutral-600'>Reviewed</h6>
      </div>
      <div className='px-4'>
        <PieChart data={data.review.pending} {...data.review.pending['datasets'][0].data = graphData} />
      </div>
    </div>
  </>
)

export default ReviewDetails
