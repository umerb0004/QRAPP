import ProfileImage from '../Image'
import { UserInfo } from '@src/typings'

import styles from '@styles/ProfileSideBar.module.css'

const ManagerDetails = ({ src, alt, name, email, designation }: UserInfo) => (
  <div className={`${styles.card} text-gray-700 text-left`}>
    <h2 className='font-medium text-lg mb-2'>{designation}</h2>
    <div className='flex items-center w-full'>
      <ProfileImage src={src} alt={alt} />
      <div className='ml-2 w-full items-center font-extralight overflow-x-hidden'>
        <h2 className='font-medium break-words'>{name}</h2>
        <h5 className='text-gray-600 text-sm break-words'>{email}</h5>
      </div>
    </div>
  </div>
)

export default ManagerDetails
