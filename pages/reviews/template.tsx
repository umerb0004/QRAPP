import axios from 'axios'

import { apis } from '@utils/constants'
import MenuSidebar from '@comp/MenuSidebar'
import ReviewTempleteTable from '@comp/ReviewTempleteTable'
import DataTable from '@comp/ReviewTempleteTable/DataTable'
import { PageTitle } from '@src/components'

const ReviewTemplete = ({ tags, designations }) => {
  if (!tags) return <></>

  return <>
    <div className='p-h-full flex flex-row justify-start'>
      <MenuSidebar />
      <div className='h-screen flex-1 p-4 bg-slate-50'>
        <section className='container mx-auto'>
          <PageTitle title='Review Template' />
        </section>
        <div className='grid  grid-flow-col auto-cols-max gap-4 pt-6'>
          <div className='col-span-2 w-60'>
            <h1 className='text-xl font-semibold text-center rounded-lg py-2 h-10 mb-5'>
              Tags\Designations
            </h1>
            <ReviewTempleteTable data={tags} />
          </div>
          {designations.map((item, key) => (
            <div key={key} className='w-24'>
              <DataTable designation={item} number={tags.length} tags={tags} />
            </div>
          ))}
        </div >
      </div>
    </div >
  </>
}

export async function getServerSideProps() {
  const { data } = await axios.get(apis.tags.url)
  const designations = await axios.get(apis.designations.url)
  let temp = designations.data.filter(e => e.name !== 'CEO' && e.name !== 'PM' && e.name != 'APM')

  return {
    props: { tags: data, designations: temp }
  }
}

export default ReviewTemplete
