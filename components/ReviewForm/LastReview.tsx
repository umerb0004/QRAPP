import dayjs from 'dayjs'
import { Rate } from 'antd'
import { useState } from 'react'

import Detail from './detail'
import { type LastQuarterReview as Props } from '@src/typings'

import { cardClasses } from './styles'


const LastReview: React.FC<Props> = ({ Tasks, marks_received, quarter_no, previousYear }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const tagData = Object.entries(marks_received)
  const tags = tagData.length
  const goals = Tasks.length
  const height = (goals + tags) * 3
  const expandedHeight = (goals + tags) * 4
  const divHeight = expandedIndex !== null ? `${expandedHeight}rem` : `${height}rem`

  const toggleExpand = (index: number) =>
    setExpandedIndex(prev => (index !== prev ? index : null))

  return <>
    <div className='max-h-[50%]'>
      <p className='text-xl my-3'>Last Quarterly Review</p>
      <div className={cardClasses}
        style={{ height: tags === 0 ? '2rem' : divHeight }}>
        {tags === 0 ? <p className='overflow-hidden'>No review</p> : <>
          {tagData.length !== 0 && <>
            <p className='text-2xl mb-3'>Q{quarter_no}-{previousYear}</p>
            {tagData.map(([title, { rating, reason }], index) => (
              <Detail
                key={`tags_${index}`}
                onClick={() => toggleExpand(index)}
                title={title}
                expanded={index === expandedIndex}
                desc={reason}
              >
                <Rate
                  disabled
                  defaultValue={rating}
                  className='text-sm ml-auto'
                />
              </Detail>
            ))}
          </>}
          {Tasks.length !== 0 && <>
            <p className='my-2 text-xl'>Goals</p>
            {Tasks.map(({ duration, description }, index) => (
              <Detail
                key={`goals_${index}`}
                onClick={() => toggleExpand(tags + index)}
                title={`Goal ${index + 1}`}
                expanded={tags + index === expandedIndex}
                desc={description}
              >
                <p className='ml-auto text-sm'>
                  {dayjs(duration).format('DD/MM/YYYY')}
                </p>
              </Detail>
            ))}
          </>}
        </>}
      </div>
    </div>
  </>
}

export default LastReview
