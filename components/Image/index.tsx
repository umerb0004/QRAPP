import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

import { imageClsses } from '@comp/Image/style'
import profileImage from '@public/profile.png'

export type Image = ImageProps & {
  h?: string
  w?: string
}

const ProfileImage = ({ src, alt, h = 'h-12', w = 'w-16', fill }: Image) => {
  const [imgSrc, setImgSrc] = useState(src)

  return <>
    <div className={`${h} ${w} ${fill && 'relative'}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={fill ? undefined : 48}
        height={fill ? undefined : 48}
        className={imageClsses(fill)}
        onError={() => setImgSrc(profileImage)}
        fill={fill}
      />
    </div>
  </>
}

export default ProfileImage
