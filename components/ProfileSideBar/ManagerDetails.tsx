import ProfileImage from '../Image'
import { UserInfo } from '@src/typings'

import styles from '@styles/ProfileSideBar.module.css'

const ManagerDetails = ({ src, alt, name, email, designation }: UserInfo) => (
  <div className={`${styles.card} text-gray-700 text-left`}>
    <h2 className='mb-2 text-lg font-medium'>{designation}</h2>
    <div className='flex items-center w-full'>
      <ProfileImage src={src} alt={alt} />
      <div className='items-center w-full ml-2 overflow-x-hidden font-extralight'>
        <h2 className='font-medium break-words'>{name}</h2>
        <h5 className='text-sm text-gray-600 break-words'>{email}</h5>
      </div>
    </div>
  </div>
)

export default ManagerDetails
