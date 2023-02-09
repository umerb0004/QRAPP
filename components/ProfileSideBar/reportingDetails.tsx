import { expendedClasses, teamLengthClasses } from '@comp/ProfileSideBar/style'
import { ProfileImage } from 'components'
import { UserInfo } from '@src/typings'
import { ViewAllIcon } from '@public/Icons'

import styles from '@styles/ProfileSideBar.module.css'

type Props = {
  team: UserInfo[]
  scroll: VoidFunction
}

const ReportingDetails = ({ team }: Props) =>
   (
    <div className={styles.card}>
      <div className='flex justify-between'>
        <h2 className='font-medium text-lg mb-2'>Team</h2>
        <a href='teams' className='text-gray-400 hover:text-gray-100  mx-2'>
          <i>
            <ViewAllIcon
              title='View all'
              className='h-6 w-6 color: text-neutral-600 hover:fill-blue-500'
            />
          </i>
        </a>
      </div>
      <div className={expendedClasses(false)}>
        {team.map(({ src, alt }, index) => index < 3 && <>
          <ProfileImage src={src} alt={alt} w='w-12' />
        </>)}
        {team.length > 3 &&
          <>
            <div className={teamLengthClasses}>
              +{team.length - 3}
            </div>
          </>
        }
      </div>
    </div>
  )

export default ReportingDetails
