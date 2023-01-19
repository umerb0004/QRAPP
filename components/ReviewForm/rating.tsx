import { Controller } from 'react-hook-form'
import { Rating as StarRating } from 'react-simple-star-rating'

import { ratingBoxClasses, reatingDescClassses, textareaClasses } from '@comp/ReviewForm/style'

const Rating = ({ control, desc, label, register, tag }) => (
  <>
    <div className={ratingBoxClasses}>
      <div className='group flex items-center'>
        <h2 title={desc} className='font-medium text-lg mb-2'>
          {`${label}:`}
        </h2>
        <span className={reatingDescClassses}>
          {desc}
        </span>
      </div>
      <Controller
        name={tag}
        control={control}
        render={({ field: { onChange, value } }) => (
          <StarRating
            onClick={onChange}
            initialValue={value}
            iconsCount={5}
            fillColor='#6baaf1'
            allowFraction
            transition
            SVGstyle={{ display: 'inline' }}
          />
        )}
      />
    </div>
    <textarea
      {...register(desc)}
      rows={4}
      placeholder='Description: '
      className={textareaClasses}
    />
  </>
)

export default Rating
