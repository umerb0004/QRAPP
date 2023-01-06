import Dashboard from '../Dashboard/Dashboard'
import MenuSidebar from '../MenuSidebar'
import ProfileSidebar from '../ProfileSideBar'

const Layout = () => (
  <div className='h-full flex flex-row justify-start'>
    <MenuSidebar />
    <Dashboard />
    <ProfileSidebar />
  </div>
)

export default Layout
