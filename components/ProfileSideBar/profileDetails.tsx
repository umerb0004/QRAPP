import { ProfileImage } from 'components'

import { UserInfo } from '@src/typings'
import { profileNameClasses, profileCardClasses } from '@comp/ProfileSideBar/style'

const ProfileDetails = ({ src, alt, name, email, designation }: UserInfo) => (
  <div className={profileCardClasses}>
    <ProfileImage src={src} alt={alt} h={'h-40'} w={'w-40'} fill />
    <h1 className={profileNameClasses}>{name}</h1>
    <div className='items-center my-1 font-extralight'>
      <p className='text-gray-600'>{email}</p>
    </div>
    <h2 className='text-gray-600 capitalize font-extralight'>{designation}</h2>
  </div>
)

export default ProfileDetails
