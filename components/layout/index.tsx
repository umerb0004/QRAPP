import Dashboard from '../dashboard'
import MenuSidebar from '../menuSidebar'
import ProfileSidebar from '../profileSideBar'

const Layout = () => (
  <div className='h-full flex flex-row justify-start'>
    <MenuSidebar />
    <Dashboard />
    <ProfileSidebar />
  </div>
)

export default Layout
