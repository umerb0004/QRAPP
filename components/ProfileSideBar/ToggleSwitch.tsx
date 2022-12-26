import { Dispatch, SetStateAction } from 'react'
import { Switch } from '@headlessui/react'

import styles from '@styles/ProfileSideBar.module.css'

type Props = {
  enabled: boolean
  setEnabled: Dispatch<SetStateAction<boolean>>
}

const ToggleSwitch = ({ enabled, setEnabled }: Props) => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <p
        className={`${
          enabled ? 'text-gray-400' : 'text-gray-600'
        } font-medium text-md`}
      >
        Me
      </p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={styles.toggle_switch}
      >
        <span
          aria-hidden='true'
          className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
          pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <p
        className={`${
          enabled ? 'text-gray-600' : 'text-gray-400'
        } font-medium text-md`}
      >
        My Team
      </p>
    </div>
  )
}

export default ToggleSwitch
