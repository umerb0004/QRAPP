import classNames from 'classnames'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

import { MenuLabel, NavItem } from './style'
import { menuItems } from './menu'
import { SignoutIcon } from '../Icons'


const MenuSidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const handleSidebarToggle = () => setToggleCollapse(!toggleCollapse)

  const wrapperClasses = classNames('px-4 pb-4 bg-white flex flex-col', {
    ['w-20']: toggleCollapse,
  })

  return <>
    <div className={wrapperClasses}>
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
      <div className='flex flex-col items-start '>
        {menuItems.map(({ icon: Icon, ...menu }) => (
          <div className={NavItem} key={menu.id}>
            <div className='flex py-4 px-2 items-center group'>
              <div className='w-9'>
                <Icon />
              </div>
              {!toggleCollapse && (
                <span className={classNames(MenuLabel)}>
                  {menu.label}
                </span>
              )}
            </div>
          </div>
        ))}
        <div className={NavItem}>
          <button onClick={() => signOut()}>
            <div className='flex py-4 px-2 items-center group'>
              <div className='w-9'>
                <SignoutIcon />
              </div>
              {!toggleCollapse && (
                <span className={classNames(MenuLabel)}>
                  Sign Out
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  </>
}

export default MenuSidebar
