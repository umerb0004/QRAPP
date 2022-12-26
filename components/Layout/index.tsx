import { ReactNode } from 'react'

import ProfileSidebar from '../ProfileSideBar'
import Sidebar from '../Sidebar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex-1'>{children}</div>
      <div className='flex'>
        <ProfileSidebar />
      </div>
    </div>
  )
}

export default Layout
