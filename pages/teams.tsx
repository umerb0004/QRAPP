import { MenuSidebar, Teams as teamEmployees, Pagination } from 'components'
import { useSession } from 'next-auth/react'

export { getServerSideProps } from './_app'

const Teams = () => {
  const { data: session } = useSession()
  let email: string = ''
  if (session) email = session!.user?.email!
  const apiAddress = `/api/teams/${email}`
  return <>
    <div className='p-h-full flex flex-row justify-start'>
      <MenuSidebar />
      <div className='h-screen flex-1 p-4 bg-slate-50'>
        <section className='container mx-auto p-6'>
          <div>
            <h1 className='text-4xl font-bold'>Team</h1>
          </div>
          <div className='w-full my-8 overflow-hidden rounded-lg shadow-lg'>
            <div className='w-full overflow-x-auto'>
              <Pagination table={teamEmployees} apiAddress={apiAddress}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
}

export default Teams
