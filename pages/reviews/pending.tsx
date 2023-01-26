import { MenuSidebar, PageTitle, PendingReviews } from 'components'

export { getServerSideProps } from '../_app'

const Review = () => (
  <div className='h-full flex flex-row justify-start'>
    <MenuSidebar />
    <div className='h-full flex-1 p-4 bg-slate-50'>
      <section className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-top'>
            <PageTitle title={'Pending Reviews'} />
          </div>
        </div>
        <div className='w-full my-4 overflow-hidden'>
          <div className='w-full overflow-x-auto'>
            <PendingReviews />
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default Review
