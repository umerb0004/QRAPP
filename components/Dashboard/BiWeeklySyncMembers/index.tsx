import format from 'date-fns/format'
import { useState } from 'react'

import { ProfileImage } from 'components'
import { DropdownIcon, UpIcon, ViewAllIcon } from '@public/Icons'

import { biWeekly } from '@src/dummyData/biWeeklySync'

const SyncMembers = () => {
  const [showMore, setShowMore] = useState(
    biWeekly.reduce((previous, object) => ({ ...previous, [object['id']]: false }), {})
  )

  const handleClick = id => setShowMore(prev => ({ ...prev, [id]: !prev[id] }))

  return <>
    <div className='max-w-screen-sm p-5 overflow-auto bg-white shadow-lg rounded-3xl max-h-96 scrollbar-hide'>
      <div className='flex justify-between'>
        <h3 className='mb-2 text-lg font-medium leading-tight text-gray-700 focus:nt-medium'>
          Bi-Weekly Syncs
        </h3>
        <a href='#' className='text-gray-400 hover:text-gray-100  mx-2'>
          <i>
            <ViewAllIcon
              title='View all'
              className='h-6 w-6 color: text-neutral-600 hover:fill-blue-500'
            />
          </i>
        </a>
      </div>
      {biWeekly.map((member, index) => (
        <div
          key={member.id}
          className='relative p-4 pl-2 border-l border-gray-200 dark:border-gray-700'
        >
          <div className={`absolute w-3 h-3 ${index % 2 !== 0 ? 'bg-emerald-600' : 'bg-blue-500'} rounded-full mt-7 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-900`}></div>
          <div className='flex items-start w-full p-2 border rounded ml-2'>
            <div className='contents text-ellipsis'>
              <div className='mt-1'>
                <ProfileImage src={member.image} alt={'img'} w={'w-12'} />
              </div>
              <div className='grid'>
                <p className={`mt-1 ml-2 ${!showMore[member.id] ? 'overflow-hidden truncate' : 'break-all text-sm'} text-gray-600`}>
                  {member.description}
                </p>
                <div className='mt-2 ml-2 italic text-sm text-gray-600 font-extralight leading-none'>
                  {format(new Date(member.created_at), 'dd/MM/yyyy')}
                </div>
              </div>
              <button
                className='px-2 py-0.5 ml-2 font-semibold bg-white'
                onClick={() => handleClick(member.id)}
              >
                {showMore[member.id] ? (
                  <UpIcon className='mt-4 w-4 h-4 text-gray-700' />
                ) : (
                  <DropdownIcon className='mt-4 w-4 h-4 text-gray-700' />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
}

export default SyncMembers
