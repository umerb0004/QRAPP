import { Controller } from 'react-hook-form'
import { DatePicker, Input, Popover } from 'antd'
import dayjs from 'dayjs'

import { tomorrow } from '@utils/constants'
import { type GoalProps as Props } from '@src/typings'
import { durationHeadingClasses, goalsDateSectionClasses } from './styles'

const { TextArea } = Input

const Goal: React.FC<Props> = ({ control, index }) => {
  return (
    <>
      <div className={goalsDateSectionClasses}>
        <Popover content='target date for this goal' placement='right'>
          <p className={durationHeadingClasses}>Duration</p>
        </Popover>
        <Controller
          control={control}
          name={`goals.${index}.duration`}
          defaultValue={new Date(tomorrow)}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              disabledDate={(current) =>
                current && current < dayjs().endOf('day')
              }
              defaultValue={dayjs(value)}
              onChange={(date) => onChange(date?.toDate())}
              size='large'
            />
          )}
        />
      </div>
      <Controller
        key={`goal_${index}`}
        name={`goals.${index}.description`}
        defaultValue=''
        control={control}
        render={({ field: { onChange } }) => (
          <TextArea
            showCount
            maxLength={500}
            autoSize={{
              minRows: 4,
            }}
            style={{
              resize: 'none',
              width: '100%',
              margin: 2,
            }}
            onChange={onChange}
            placeholder='Description: '
            allowClear
          />
        )}
      />
    </>
  )
}

export default Goal
