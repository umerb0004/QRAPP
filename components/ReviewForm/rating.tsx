import { Controller } from 'react-hook-form'
import { Input, Rate } from 'antd'
const { TextArea } = Input

import { type RatingProps as Props } from '@src/typings'
import { ratingClasses } from './styles'

const descriptions = ['terrible', 'bad', 'normal', 'good', 'wonderful']
const Rating: React.FC<Props> = ({ control, desc, feedback, label, tag }) => <>
  <div className={ratingClasses}>
    <div className='flex flex-col font-medium'>
      <h2 className='text-lg'>{label}:</h2>
      <h3 className='text-sm mb-2 font-extralight'>{desc}</h3>
    </div>
    <Controller
      name={tag}
      control={control}
      defaultValue={0}
      render={({ field: { onChange, value } }) => (
        <Rate
          onChange={onChange}
          defaultValue={value}
          className='text-3xl'
          tooltips={descriptions}
        />
      )}
    />
  </div>
  <Controller
    name={feedback}
    control={control}
    defaultValue=''
    render={({ field: { onChange } }) => (
      <TextArea
        showCount
        maxLength={500}
        autoSize={{ minRows: 2 }}
        style={{
          resize: 'none',
          width: '100%',
          margin: 2,
          marginBottom: '1rem'
        }}
        required={true}
        onChange={onChange}
        placeholder='Enter description here... '
        allowClear
      />
    )}
  />
</>

export default Rating
