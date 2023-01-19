import { useState } from 'react'

import { ProfileImage } from 'components'
import { UserInfo } from '@src/typings'
import { DropdownIcon } from '@public/Icons'
import { expendedClasses, nameEmailClasses, teamLengthClasses } from '@comp/ProfileSideBar/style'

import styles from '@styles/ProfileSideBar.module.css'

type Props = {
  team: UserInfo[]
  scroll: VoidFunction
}

const ReportingDetails = ({ team, scroll }: Props) => {
  const [expand, setExpand] = useState(false)

  const toggleExpand = () => {
    setExpand(prev => !prev)
    scroll()
  }

  return (
    <div className={styles.card}>
      <div className='flex justify-between'>
        <h2 className='font-medium text-lg mb-2'>Team</h2>
        <button onClick={toggleExpand}>
          <DropdownIcon className='text-gray-700 w-4 h-4' />
        </button>
      </div>
      <div className={expendedClasses(expand)}>
        {!expand ? (
          <>
            {team.map(({ src, alt }, index) => index < 3 && <>
              <ProfileImage src={src} alt={alt} w='w-12' />
            </>)}
            <div className={teamLengthClasses}>
              +{team.length - 3}
            </div>
          </>
        ) : (team.map(({ src, alt, name, email }) => (
          <div className='flex items w-full my-2' key={alt}>
            <ProfileImage src={src} alt={alt} />
            <div className={nameEmailClasses}>
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
