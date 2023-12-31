import { MenuSidebar, Teams as teamEmployees, Pagination, PageTitle } from 'components'
import { useSession } from 'next-auth/react'


export { getServerSideProps } from './_app'
import axios from 'axios'
import useSwr from 'swr'

const Teams = () => {

  const { data: session } = useSession()
  let email: string = ''

  if (session) email = session!.user?.email!
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, isLoading } = useSwr(`/api/teams/${email}`, fetcher)

  if (isLoading) return <h1>loading</h1>
  const usersToShow = data!

  return <>
    <div className='p-h-full flex flex-row justify-start'>
      <MenuSidebar />
      <div className='h-screen flex-1 p-4 bg-slate-50'>
        <section className='container mx-auto p-6'>
          <div>
            <PageTitle title='Teams' />
          </div>
          <Pagination table={teamEmployees} usersToShow={usersToShow}/>
        </section>
      </div>
    </div>

  </>
}

export default Teams
