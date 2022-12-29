import { ReactNode } from 'react'

import Sidebar from '../Sidebar'
import ProfileSidebar from '../ProfileSideBar'

interface LayoutProps {
  children: ReactNode
  session:
    | {
        user?: userProps
        expires?: string | undefined | null
      }
    | undefined
    | null
}

type userProps =
  | {
      name?: string | undefined | null
      email?: string | undefined | null
      image?: string | undefined | null
    }
  | undefined
  | null

const Layout = ({ children } : LayoutProps) => {
  return <div className='h-full flex flex-row justify-start'>
    <div className='flex-col'>
      <Sidebar/>
    </div>
    <div className='flex-1 bg-slate-50'>{children}</div>
    <ProfileSidebar />
  </div>
}

export default Layout
