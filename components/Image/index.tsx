import Image, { ImageProps } from 'next/image'

import styles from '@styles/ProfileSideBar.module.css'

export type image = ImageProps & {
  h?: string
  w?: string
}

const ProfileImage = ({src, alt, h='h-12', w='w-16'}: image) => {
  return <div className={`${h} ${w}`}>
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={`${styles.img_profile} w-full h-full`}
    />
  </div>
}

export default ProfileImage
