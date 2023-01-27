import { Popover } from 'antd'

import { DropdownIcon, RightArrowIcon } from '@public/Icons'
import { type DetailProps as Props } from '@src/typings'

const Detail: React.FC<Props> = ({
  onClick,
  title,
  expanded,
  desc,
  children,
}) => (
  <>
    <div className='flex flex-row items-center my-1' onClick={onClick}>
      <Popover content='view description' placement='left'>
        {expanded ? (
          <DropdownIcon className='w-4 h-4 text-gray-700' />
        ) : (
          <RightArrowIcon className='w-4 h-4 text-gray-700' />
        )}
      </Popover>
      <p className='text-sm'>{title}</p>
      {children}
    </div>
    {expanded && (
      <div className='translate-x-5 text-sm text-justify p-3 m-2 text-white bg-blue-300 rounded-2xl'>
        {desc === '' ? 'No description' : desc}
      </div>
    )}
  </>
)

export default Detail
