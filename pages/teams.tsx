import { MenuSidebar, Teams as PaginatedTable } from 'components'

export { getServerSideProps } from './_app'

const Teams = () => (
  <div className='p-h-full flex flex-row justify-start'>
    <MenuSidebar />
    <div className='h-screen flex-1 p-4 bg-slate-50'>
      <section className='container mx-auto p-6'>
        <div>
          <h1 className='text-4xl font-bold'>Team</h1>
        </div>
        <div className='w-full my-8 overflow-hidden rounded-lg shadow-lg'>
          <div className='w-full overflow-x-auto'>
            <PaginatedTable usersPerPage={10} />
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default Teams
