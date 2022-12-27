import Sidebar from '../Sidebar'
import Signout from '../googleSignin/signOut'
import ProfileSidebar from '../ProfileSideBar'

import { ReactNode } from 'react'

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

const Layout = ({ session, children } : LayoutProps) => {
  return (
    <div className='h-full flex flex-row justify-start'>
      <Sidebar />
      <div className='flex-col'>{children}</div>
      <div className='flex-1'>
        <Signout session={session} />
      </div>
      <ProfileSidebar />

    </div>
  )
}

export default Layout
