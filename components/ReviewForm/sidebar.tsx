import { type SidebarProps as Props } from '@src/typings'

import BiWeeklySyncs from './biWeeklySyncs'
import LastReview from './LastReview'

import { sidebarClasses } from './styles'

const Sidebar: React.FC<Props> = ({
  quarterSelected,
  Tasks,
  marks_received,
  quarter_no,
}) => {
  return (
    <div className='sticky h-screen w-[35rem] overflow-y-scroll overscroll-contain bg-slate-50'>
      <div className={sidebarClasses}>
        <LastReview
          quarter_no={quarter_no}
          Tasks={Tasks}
          marks_received={marks_received}
        />
        <BiWeeklySyncs quarterSelected={quarterSelected} />
      </div>
    </div>
  )
}

export default Sidebar
