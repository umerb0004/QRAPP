import classNames from 'classnames'
import { useState } from 'react'
import Image from 'next/image'
import { SignoutIcon } from '../Icons'
import { signOut } from 'next-auth/react'

import { menuItems, getNavItemClasses } from '../constants'

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const handleSidebarToggle = () => setToggleCollapse(!toggleCollapse)

  const wrapperClasses = classNames('px-4 pb-4 bg-white flex flex-col', {
    ['w-20']: toggleCollapse,
  })

  return (
    <div className={wrapperClasses}>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <div className='flex items-center py-4'>
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
      </div>
      <div className='flex flex-col items-start '>
        {menuItems.map(({ icon: Icon, ...menu }) => {
          return (
            <div className={getNavItemClasses} key={menu.id}>
              <div className='flex py-4 px-3 items-center group'>
                <div className='w-9'>
                  <Icon />
                </div>
                {!toggleCollapse && (
                  <span
                    className={classNames(
                      'text-md font-medium group-hover:text-blue-500 group-hover:scale-105 text-neutral-600 pl-2 '
                    )}
                  >
                    {menu.label}
                  </span>
                )}
              </div>
            </div>
          )
        })}
        <div className={getNavItemClasses}>
          <button onClick={() => signOut()}>
            <div className='flex py-4 px-3 items-center group'>
              <div className='w-9'>
                <SignoutIcon />
              </div>
              {!toggleCollapse && (
                <span
                  className={classNames(
                    'text-md font-medium group-hover:text-blue-500 group-hover:scale-105 text-neutral-600 pl-2 '
                  )}
                >
                  Sign Out
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
