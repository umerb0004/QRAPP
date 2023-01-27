import dayjs from 'dayjs'
import { Popover, Timeline } from 'antd'
import { useState } from 'react'

import { biWeekly } from '@src/dummyData/biWeeklySync'
import { DropdownIcon, UpIcon } from '@public/Icons'

const BiWeeklySyncs: React.FC<{ quarterSelected: number }> = ({
  quarterSelected,
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) =>
    setExpandedId((prev) => (id !== prev ? id : null))
  return (
    <div className='h-1/2'>
      <p className='text-xl my-3 text-center'>
        Bi weekly syncs - Q{quarterSelected}
      </p>
      <Timeline className='w-96 p-5'>
        {biWeekly.length === 0 ? (
          <p className='text-center text-neutral-600'>No syncs this quarter</p>
        ) : (
          biWeekly.map(({ id, description, updated_at }) => (
            <div className='px-5 text-neutral-600' key={id}>
              <Timeline.Item color='#60A5FA'>
                <div className='flex items-center justify-between'>
                  <div className='mt-2 ml-2 italic text-sm text-gray-600 font-extralight leading-none'>
                    {dayjs(updated_at).format('DD/MM/YYYY')}
                  </div>
                  <button
                    className='py-0.5 ml-2 font-semibold'
                    onClick={() => toggleExpand(id)}
                  >
                    {id === expandedId ? (
                      <Popover content='view less'>
                        <UpIcon className=' w-4 h-4 text-gray-700' />
                      </Popover>
                    ) : (
                      <Popover content='view more'>
                        <DropdownIcon className=' w-4 h-4 text-gray-700' />
                      </Popover>
                    )}
                  </button>
                </div>
                <div className='grid'>
                  <p
                    className={`mt-1 ml-2 ${
                      id === expandedId
                        ? 'break-all text-sm'
                        : 'overflow-hidden truncate'
                    } text-gray-600`}
                  >
                    {description}
                  </p>
                </div>
              </Timeline.Item>
            </div>
          ))
        )}
      </Timeline>
    </div>
  )
}

export default BiWeeklySyncs
