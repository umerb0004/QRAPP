import classNames from 'classnames'

export const wrapperClasses = collapsed => classNames('px-4 pb-4 bg-white flex flex-col', {['w-20 mt-2']: collapsed})
export const menuItemClasses = 'flex items-center cursor-pointer rounded w-full h-full overflow-hidden whitespace-nowrap'
export const menuGroupClasses = 'flex py-4 px-2 items-center group'
export const menuLabelClasses = 'text-md font-medium group-hover:text-blue-500 text-neutral-600'
