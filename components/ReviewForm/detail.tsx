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
      <div className='translate-x-2 text-sm text-justify p-3 break-words m-2 text-gray-500 bg-gray-100 shadow-md rounded-md'>
        {desc === '' ? 'No description' : desc}
      </div>
    )}
  </>
)

export default Detail
