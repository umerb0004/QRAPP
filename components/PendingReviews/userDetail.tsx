import { userBlockClasses, userImageClasses, imageShadowClasses} from '@comp/PendingReviews/style'

const UserDetail = ({ pic, name, email }) => <>
  <div className='flex items-center text-sm'>
    <div className={userBlockClasses}>
      <img
        className={userImageClasses}
        src={pic}
        alt=''
        loading='lazy'
        onError={e => (e.currentTarget.src = `https://ui-avatars.com/api/?background=49bdb4&&color=fff&name=${name}`)}
      />
      <div className={imageShadowClasses} aria-hidden='true'></div>
    </div>
    <div className='text-left'>
      <p className='text-black'>{name}</p>
      <p className='text-xs text-gray-600'>{email}</p>
    </div>
  </div>
</>

export default UserDetail
