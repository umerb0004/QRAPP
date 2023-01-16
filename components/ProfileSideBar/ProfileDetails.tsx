import ProfileImage from '../image'
import { UserInfo } from '@src/typings'

import styles from '@styles/ProfileSideBar.module.css'

const ProfileDetails = ({ src, alt, name, email, designation }: UserInfo) => (
  <div className={`${styles.card} flex flex-col items-center`}>
    <ProfileImage src={src} alt={alt} h={'h-40'} w={'w-40'} fill />
    <h1 className='font-medium text-xl mt-1.5 text-neutral-600 capitalize'>
      {name}
    </h1>
    <div className='items-center my-1 font-extralight'>
      <p className='text-gray-600'>{email}</p>
    </div>
    <h2 className='text-gray-600 capitalize font-extralight'>{designation}</h2>
  </div>
)

export default ProfileDetails
