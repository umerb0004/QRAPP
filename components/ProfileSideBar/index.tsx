import { useRef, useState } from 'react'

import ManagerDetails from './ManagerDetails'
import profileImage from '@public/profile.png'
import managerImage from '@public/manager.png'
import ProfileDetails from './ProfileDetails'
import ReportingDetails, { type TeamMember } from './ReportingDetails'
import ToggleSwitch from './ToggleSwitch'

const ProfileSidebar = () => {
  const [enabled, setEnabled] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = () => {
    scrollRef.current?.scrollIntoView()
  }
  const team: TeamMember[] = [
    {
      src: profileImage,
      alt: 'profile image 1',
      name: 'Name',
    },
    {
      src: profileImage,
      alt: 'profile image 2',
      name: 'Name',
    },
    {
      src: profileImage,
      alt: 'profile image 3',
      name: 'Name',
    },
    {
      src: profileImage,
      alt: 'profile image 4',
      name: 'Name',
    },
  ]

  return (
    <div className='max-w-xs h-full min-h-screen text-black text-center pr-3 bg-slate-50'>
      <ProfileDetails
        src={managerImage}
        alt='profile image'
        name='Fareed Murtaza'
        email='fareed.murtaza@devsinc.com'
        designation='Software engineer'
      />
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
      <ManagerDetails
        src={profileImage}
        alt='manager profile image'
        name='Manager name'
        designation='Manager'
      />
      {enabled ? (
        <ReportingDetails team={team} scroll={scroll} />
      ) : (
        <ManagerDetails
          src={profileImage}
          alt='manager profile image'
          name='Manager name'
          designation='Reporting to'
        />
      )}
      <div ref={scrollRef} />
    </div>
  )
}

export default ProfileSidebar
