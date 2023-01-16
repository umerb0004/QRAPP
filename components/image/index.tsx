import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

import profileImage from '@public/profile.png'

import styles from '@styles/ProfileSideBar.module.css'

export type image = ImageProps & {
  h?: string
  w?: string
}

const ProfileImage = ({ src, alt, h='h-12', w='w-16', fill }: image) => {
  const [imgSrc, setImgSrc] = useState(src)

  return <>
    <div className={`${h} ${w} ${fill && 'relative'}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={fill ? undefined : 48}
        height={fill ? undefined : 48}
        className={`${styles.img_profile} w-full h-full ${
          fill && 'object-contain'
        }`}
        onError={() => setImgSrc(profileImage)}
        fill={fill}
      />
    </div>
  </>
}

export default ProfileImage
