import axios from 'axios'
import { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import useSwr from 'swr'

import ManagerDetails from '@comp/ProfileSideBar/managerDetails'
import ProfileDetails from '@comp/ProfileSideBar/profileDetails'
import ReportingDetails from '@comp/ProfileSideBar/reportingDetails'
import ToggleSwitch from '@comp/ProfileSideBar/toggleSwitch'

import { UserDetails, UserInfo } from '@src/typings'
import { sidebarClasses } from '@comp/ProfileSideBar/style'

const ProfileSidebar = () => {
  const [enabled, setEnabled] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { data: session } = useSession()

  let email: string = ''
  if (session) email = session!.user?.email!

  const scroll = () => scrollRef.current?.scrollIntoView()
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, isLoading } = useSwr<UserDetails>(`/api/users/${email}`, fetcher)

  if (isLoading) return <h1>loading</h1>

  const { lead, manager, team, userData } = data!

  const teamMembers: UserInfo[] = team.map((team, index) => {
    return {
      src: team.profile_pic,
      alt: `profile image ${index}`,
      name: `${team.first_name} ${team.last_name}`,
      email: team.email,
    }
  })

  return <>
  <aside className='h-screen sticky top-0'>
    <div className={sidebarClasses}>
      <ProfileDetails
        src={userData.profile_pic}
        alt='profile image'
        name={`${userData.first_name} ${userData.last_name}`}
        email={userData.email}
        designation={userData.Designations.name}
      />
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
      <ManagerDetails
        src={manager.profile_pic}
        alt='manager profile image'
        name={`${manager.first_name} ${manager.last_name}`}
        email={manager.email}
        designation='Manager'
      />
      {enabled ? (
        <ReportingDetails team={teamMembers} scroll={scroll} />
      ) : (
        <ManagerDetails
          src={lead.profile_pic}
          alt='manager profile image'
          name={`${lead.first_name} ${lead.last_name}`}
          email={lead.email}
          designation='Reporting To'
        />
      )}
      <div ref={scrollRef} />
    </div>
  </aside>
  </>
}

export default ProfileSidebar
