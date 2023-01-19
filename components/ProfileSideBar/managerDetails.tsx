import { ProfileImage } from 'components'
import { UserInfo } from '@src/typings'

import { cardClasses, nameEmailClasses } from '@comp/ProfileSideBar/style'

const ManagerDetails = ({ src, alt, name, email, designation }: UserInfo) => (
  <div className={cardClasses}>
    <h2 className='font-medium text-lg mb-2'>{designation}</h2>
    <div className='flex items-center w-full'>
      <ProfileImage src={src} alt={alt} />
      <div className={nameEmailClasses}>
        <h2 className='font-medium break-words'>{name}</h2>
        <h5 className='text-sm text-gray-600 break-words'>{email}</h5>
      </div>
    </div>
  </div>
)

export default ManagerDetails
