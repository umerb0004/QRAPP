import Image, { ImageProps } from 'next/image'

import styles from '@styles/ProfileSideBar.module.css'

export type image = ImageProps & {
  h?: string
  w?: string
}

const ProfileImage = ({ src, alt, h='h-12', w='w-16', fill }: image) => (
  <div className={`${h} ${w} ${fill && 'relative'}`}>
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : 48}
      height={fill ? undefined : 48}
      className={`${styles.img_profile} w-full h-full ${fill && 'object-contain'}`}
      fill={fill}
    />
  </div>
)

export default ProfileImage
