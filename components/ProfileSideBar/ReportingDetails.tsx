import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

import { DropdownIcon } from '../Icons'

import styles from '@styles/ProfileSideBar.module.css'

export type TeamMember = ImageProps & {
  name: string
  email: string
}

type Props = {
  team: TeamMember[]
  scroll: VoidFunction
}

const ReportingDetails = ({ team, scroll }: Props) => {
  const [expand, setExpand] = useState(false)

  const toggleExpand = () => {
    setExpand((prev) => !prev)
    scroll()
  }

  const extras: number = team.length - 3
  return (
    <div className={styles.card}>
      <div className='flex justify-between'>
        <h2 className='font-medium text-lg mb-2'>Team</h2>
        <button onClick={toggleExpand}>
          <DropdownIcon className='text-gray-700 w-4 h-4' />
        </button>
      </div>
      <div
        className={`${
          expand ? 'translate-y-1 text-left' : 'flex flex-row translate-y-0'
        } transform transition duration-[5000] ease-in`}
      >
        {!expand ? (
          <>
            {team.map(
              ({ src, alt }, index) =>
                index < 3 && (
                  <Image
                    src={src}
                    alt={alt}
                    width={48}
                    height={48}
                    className={`${styles.img_profile} h-12 w-12`}
                    key={alt}
                  />
                )
            )}
            <div className='rounded-full bg-gray-600 h-12 w-12 text-white flex items-center justify-center'>
              +{extras}
            </div>
          </>
        ) : (
          team.map(({ src, alt, name, email }) => (
            <div className='flex items w-full my-2' key={alt}>
              <Image
                src={src}
                alt={alt}
                className={`${styles.img_profile} h-14 w-14`}
              />
              <div className='ml-2 w-full items-center font-extralight overflow-x-hidden'>
                <h2 className='font-medium truncate'>{name}</h2>
                <h5 className='text-gray-600 text-sm truncate'>{email}</h5>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ReportingDetails
