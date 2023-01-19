import { Dashboard, MenuSidebar, ProfileSidebar } from 'components'

const Layout = () => (
  <div className='h-full flex flex-row justify-start'>
    <MenuSidebar />
    <Dashboard />
    <ProfileSidebar />
  </div>
)

export default Layout
