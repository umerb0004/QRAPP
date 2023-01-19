import { SubmitHandler, useForm } from 'react-hook-form'

import { ProfileImage } from 'components'
import Rating from '@comp/ReviewForm/rating'

import { type Feedback, type Marks, type ReviewFormProps } from '@src/typings'

import { reviewFormFields, reviewFormDefaultValues, quarter } from '@utils/constants'
import { quarterReviewClasses, imageBoxClasses, nameEmailBoxClasses } from '@comp/ReviewForm/style'

const ReviewFrom = ({ name, email, profile }: ReviewFormProps) => {
  const { register, control, handleSubmit } = useForm<Marks | Feedback<Marks>>({
    defaultValues: reviewFormDefaultValues
  })

  const onSubmit: SubmitHandler<Marks | Feedback<Marks>> = data => console.log(data)

  return <>
    <div className='h-full'>
      <h1 className={quarterReviewClasses}>
        Q{quarter} Review
      </h1>
      <div className={imageBoxClasses}>
        <ProfileImage
          src={profile}
          alt='profile image'
          h='h-16'
          w='w-16'
          fill
        />
        <div className={nameEmailBoxClasses}>
          <p>Name: <span className='font-normal'>{name}</span></p>
          <p>Email: <span className='font-normal'>{email}</span></p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
        {reviewFormFields.slice(0, 2).map(({ tag, desc, label }) => (
          <Rating
            key={tag}
            control={control}
            desc={desc}
            label={label}
            register={register}
            tag={tag}
          />
        ))}
      </form>
    </div>
  </>
}

export default ReviewFrom
