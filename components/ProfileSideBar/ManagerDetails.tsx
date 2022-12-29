import Image, { ImageProps } from 'next/image'

import styles from '@styles/ProfileSideBar.module.css'

export type Props = ImageProps & {
  name: string
  designation: string
}

const ManagerDetails = ({ src, alt, name, designation }: Props) => (
  <div className={`${styles.card} text-gray-700 text-left`}>
    <h2 className='font-medium text-lg mb-2'>{designation}</h2>
    <div className='flex items-center w-full'>
      <Image
        src={src}
        alt={alt}
        className={`${styles.img_profile} h-14 w-14`}
      />
      <div className='ml-2 w-full items-center font-extralight'>
        <h2 className='font-medium'>{name}</h2>
        <h5 className='text-gray-600'>test@devsinc.com</h5>
      </div>
    </div>
  </div>
)

export default ManagerDetails