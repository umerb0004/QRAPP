import styles from '@styles/ProfileSideBar.module.css'

export const sidebarClasses = 'max-w-xs h-full min-h-screen text-black text-center pr-3 bg-slate-50 pt-2'
export const nameEmailClasses = 'ml-2 w-full items-center font-extralight overflow-x-hidden'
export const cardClasses = `${styles.card} text-gray-700 text-left`
export const profileNameClasses = 'font-medium text-xl mt-1.5 text-neutral-600 capitalize'
export const profileCardClasses = `${styles.card} flex flex-col items-center`
export const expendedClasses = expand => `${expand
  ? 'translate-y-1 text-left'
  : 'flex flex-row translate-y-0'}
  transform transition duration-[5000] ease-in`
export const teamLengthClasses = 'rounded-full bg-gray-600 h-12 w-12 text-white flex items-center justify-center'
export const meClasses = enabled => `${enabled ? 'text-gray-400' : 'text-gray-600'} font-medium text-md`
export const myTeamClasses = enabled => `${enabled ? 'text-gray-600' : 'text-gray-400'} font-medium text-md`
export const switchSpanClasses = enabled => `${enabled
  ? 'translate-x-6'
  : 'translate-x-0'}
  pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
