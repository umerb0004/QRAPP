import axios from 'axios'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import { Fragment } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'
import useSwr from 'swr'

import {
  type FormFields,
  type InputFieldDetails,
  type ReviewFormProps as Props,
  type ReviewTags,
  type Tags,
} from '@src/typings'
import ProfileImage from '@components/image'

const fetcher = (url: string, id: number, quarter: number) =>
  axios
    .get(url, {
      params: {
        id: id,
        quarter,
      },
    })
    .then((res) => res.data)

const ReviewFrom = ({
  id: userId,
  first_name,
  last_name,
  email,
  profile_pic,
  designation_id,
  hideModal,
}: Props) => {
  const currentTime = new Date()
  const currentQuarter = Math.floor((currentTime.getMonth() + 3) / 3)
  const previousQuarter = currentQuarter === 1 ? 4 : currentQuarter - 1
  const quarterOptions = [currentQuarter, previousQuarter]

  const [quarterSelected, setQuarterSelected] = useState(currentQuarter)
  const [goals, setGoals] = useState(1)
  const currentYear = currentTime.getFullYear()
  const previousYear = currentYear - 1
  const year =
    currentQuarter === 1 && quarterSelected === 4 ? previousYear : currentYear

  const addGoal = () => setGoals((prev) => prev + 1)

  const { data, isLoading } = useSwr<ReviewTags<Tags>[]>(
    quarterSelected ? [`/api/users/review`, quarterSelected] : null,
    ([url, quarterSelected]) => fetcher(url, designation_id, quarterSelected)
  )

  let formFields: InputFieldDetails<Tags>[] = isLoading
    ? []
    : data!.map(({ name, description }) => {
        name = name.replace(/ /g, '') as keyof Tags
        const obj: InputFieldDetails<Tags> = {
          tag: `${name}.rating`,
          feedback: `${name}.reason`,
          label: name,
          desc: description,
        }
        return obj
      })

  const noTags = formFields.length === 0

  const { register, control, handleSubmit } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const res = confirm('Confirm Review Submission?')
    if (res) {
      axios
        .post('/api/users/review', { userId, ...data })
        .then((res) => console.log(res))
      hideModal()
    }
  }

  return (
    <>
      <div className='h-full'>
        <h1 className='text-black w-full m-auto text-2xl font-semibold pb-4 flex flex-row justify-center items-center'>
          Q
          <select
            value={quarterSelected}
            onChange={({ target }) =>
              setQuarterSelected(parseInt(target.value))
            }
            className='border-none bg-transparent p-0 mr-1 inline-block w-[2.5rem] cursor-pointer'
            title='Click to change quarter number'
          >
            {quarterOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {year} Review
        </h1>
      </div>
      <div className='flex flex-row text-border w-full m-auto pb-4'>
        <ProfileImage
          src={profile_pic}
          alt='profile image'
          h='h-16'
          w='w-16'
          fill
        />
        <div className='text-black text-md font-semibold flex flex-col justify-center items-start ml-2'>
          <p>
            Name:{' '}
            <span className='font-normal'>{`${first_name} ${last_name}`}</span>
          </p>
          <p>
            Email: <span className='font-normal'>{email}</span>
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        {noTags ? (
          <p className='text-bold text-2xl'>No tags for review</p>
        ) : (
          <>
            {formFields.map(({ tag, desc, label, feedback }) => (
              <Fragment key={label}>
                <div className='flex flex-row items-center min-w-full justify-between'>
                  <div className='group flex items-center'>
                    <h2 title={desc} className='font-medium text-lg mb-2'>
                      {label}:
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
                  {...register(feedback)}
                  rows={4}
                  placeholder='Description: '
                  className='border-solid border-2 border-blue-300 rounded-xl m-2 min-h-[5rem] w-full p-2 placeholder-white '
                />
              </Fragment>
            ))}
            <div className='flex flex-col items-start min-w-full mb-2'>
              <div className='group flex items-center'>
                <h2 className='font-medium text-lg mb-2'>Goals</h2>
                <span className='opacity-0 group-hover:opacity-100 duration-300 border-2 border-blue-100 rounded-lg p-1 text-greg ml-2'>
                  Goals for next quarter
                </span>
              </div>
              {Array.from(Array(goals)).map((_, index) => (
                <>
                  <div className='ml-auto flex flex-row items-center justify-between w-full'>
                    <p className='text-black text-center text-md font-semibold mb-2 ml-1'>
                      Duration
                    </p>
                    <Controller
                      control={control}
                      name={`goals.${index}.date`}
                      defaultValue={new Date()}
                      render={({ field: { onChange, ref, value } }) => (
                        <DatePicker
                          inputRef={ref}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                    />
                  </div>
                  <textarea
                    key={`goal_${index}`}
                    {...register(`goals.${index}.description`)}
                    rows={4}
                    placeholder='Description: '
                    className='border-solid border-2 border-blue-300 rounded-xl p-2 min-h-[5rem] w-full placeholder-white my-2'
                  />
                </>
              ))}
              <button
                className='text-white bg-blue-500 font-medium uppercase text-xs p-2 my-2 ml-auto rounded shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none mr-1 mb-1 transition ease-in-out delay-150 hover:scale-110'
                onClick={addGoal}
              >
                Add another goal
              </button>
            </div>
          </>
        )}
      </div>
      <div className='flex items-center justify-end pb-6 rounded-b'>
        <button
          className='text-red-500 background-transparent font-bold uppercase px-6 py-3 rounded border-2 border-blue-500 text-sm outline-none focus:outline-none hover:bg-red-500 hover:text-white mr-1 mb-1'
          type='button'
          onClick={hideModal}
        >
          Close
        </button>
        <button
          className='text-white bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none mr-1 mb-1 disabled:hidden transition ease-in-out delay-150 hover:scale-110'
          type='button'
          disabled={noTags}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default ReviewFrom
