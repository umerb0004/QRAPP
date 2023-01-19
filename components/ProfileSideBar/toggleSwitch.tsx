import { Dispatch, SetStateAction } from 'react'
import { Switch } from '@headlessui/react'

import { meClasses, switchSpanClasses, myTeamClasses } from '@comp/ProfileSideBar/style'
import styles from '@styles/ProfileSideBar.module.css'

type Props = {
  enabled: boolean
  setEnabled: Dispatch<SetStateAction<boolean>>
}

const ToggleSwitch = ({ enabled, setEnabled }: Props) => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <p className={meClasses(enabled)}>
        Me
      </p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={styles.toggle_switch}
      >
        <span aria-hidden='true' className={switchSpanClasses(enabled)} />
      </Switch>
      <p className={myTeamClasses(enabled)}>
        My Team
      </p>
    </div>
  )
}

export default ToggleSwitch
