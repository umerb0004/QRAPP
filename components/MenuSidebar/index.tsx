import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

import Label from '@comp/MenuSidebar/label'

import { menuGroupClasses, menuItemClasses, wrapperClasses } from '@comp/MenuSidebar/style'
import { SignoutIcon } from '@public/Icons'
import { menuItems } from '@utils/constants'

const MenuSidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)

  const handleSidebarToggle = () => setToggleCollapse(!toggleCollapse)

  return <>
  <aside className='h-screen sticky top-0'>
    <div className={wrapperClasses(toggleCollapse)}>
      <div className='flex flex-col'>
        <div className='flex py-4'>
          <button onClick={handleSidebarToggle}>
            <Image
              src={toggleCollapse ? '/logo1.png' : '/logo2.png'}
              alt='logo'
              width={toggleCollapse ? 40 : 175}
              height={40}
            />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-start'>
        {menuItems.map(({ icon: Icon, ...menu }) => (
          <div className={menuItemClasses} key={menu.id}>
            <Link href={menu.link}>
              <div className={menuGroupClasses}>
                <div className='w-9'>
                  <Icon />
                </div>
                <Label label={menu.label} collapsed={!toggleCollapse} />
              </div>
            </Link>
          </div>
        ))}
        <div className={menuItemClasses}>
          <button onClick={() => signOut()}>
            <div className={menuGroupClasses}>
              <div className='w-9'>
                <SignoutIcon />
              </div>
              <Label label='Sign Out' collapsed={!toggleCollapse} />
            </div>
          </button>
        </div>
      </div>
    </div>
  </aside>
  </>
}

export default MenuSidebar
