import Image, { ImageProps } from 'next/image'

import styles from '@styles/ProfileSideBar.module.css'

type Props = ImageProps & {
  name: string
  email: string
  designation: string
}

const ProfileDetails = ({ src, alt, name, email, designation } : Props) => (
  <div className={`${styles.card} flex flex-col items-center`}>
    <Image src={src} alt={alt} className={`${styles.img_profile} h-40 w-40`} />
    <h1 className='font-medium text-xl mt-1.5 text-neutral-600 capitalize'>{name}</h1>
    <div className='items-center my-1 font-extralight	'>
      <p className='text-gray-600'>{email}</p>
    </div>
    <h2 className='text-gray-600 capitalize font-extralight'>{designation}</h2>
  </div>
)

export default ProfileDetails
