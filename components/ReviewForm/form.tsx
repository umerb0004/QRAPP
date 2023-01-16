import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Fragment } from 'react'
import { Rating } from 'react-simple-star-rating'

import {
  type Feedback,
  type InputFieldDetails,
  type Marks,
  type ReviewFormProps as Props,
} from '@src/typings'
import ProfileImage from '@components/image'

const formFields: InputFieldDetails<Marks>[] = [
  {
    tag: 'Ownership',
    desc: 'feedbackOwnership',
    label: 'Ownership',
  },
  {
    tag: 'Innovation',
    desc: 'feedbackInnovation',
    label: 'Innovation',
  },
  {
    tag: 'Productivity',
    desc: 'feedbackProductivity',
    label: 'Productivity',
  },
  {
    tag: 'Responsibility',
    desc: 'feedbackResponsibility',
    label: 'Responsibility',
  },
  {
    tag: 'TimeManagement',
    desc: 'feedbackTimeManagement',
    label: 'TimeManagement',
  },
]

const ReviewFrom = ({ name, email, profile }: Props) => {
  const quarter = Math.floor((new Date().getMonth() + 3) / 3)

  const { register, control, handleSubmit } = useForm<Marks | Feedback<Marks>>({
    defaultValues: {
      Ownership: 2.5,
      Innovation: 2.5,
      WorkEthics: 2.5,
      Productivity: 2.5,
      Responsibility: 2.5,
      TimeManagement: 2.5,
    },
  })

  const onSubmit: SubmitHandler<Marks | Feedback<Marks>> = (data) =>
    console.log(data)

  return <>
    <div className='h-full'>
      <h1 className='text-black text-center w-full m-auto text-2xl font-semibold pb-4'>
        Q{quarter} Review
      </h1>
      <div className='flex flex-row text-border w-full m-auto pb-4'>
        <ProfileImage
          src={profile}
          alt='profile image'
          h='h-16'
          w='w-16'
          fill
        />
        <div className='text-black text-md font-semibold flex flex-col justify-center items-start ml-2'>
          <p>Name: <span className='font-normal'>{name}</span></p>
          <p>Email: <span className='font-normal'>{email}</span></p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center'
      >
        {formFields.slice(0, 2).map(({ tag, desc, label }) => (
          <Fragment key={tag}>
            <div className='flex flex-row items-center min-w-full justify-between'>
              <div className='group flex items-center'>
                <h2 title={desc} className='font-medium text-lg mb-2'>
                  {`${label}:`}
                </h2>
                <span className='opacity-0 group-hover:opacity-100 duration-300 border-2 border-blue-100 rounded-lg p-1 text-greg ml-2'>
                  {desc}
                </span>
              </div>
              <Controller
                name={tag}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Rating
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
              className='border-solid border-2 border-blue-300 rounded-xl m-2 min-h-[5rem] w-full p-2 placeholder-white'
            />
          </Fragment>
        ))}
      </form>
    </div>
  </>
}

export default ReviewFrom
