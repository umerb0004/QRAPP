import { message, Popover } from 'antd'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import useSwr from 'swr'

import { AddIcon } from '@public/Icons'
import Goal from '@comp/ReviewForm/goals'
import Rating from '@comp/ReviewForm/rating'
import SubmissionModal from '@comp/ReviewForm/submissionModal'
import {
  type FormFields,
  type FormProps as Props,
  type InputFieldDetails,
  type ReviewTags,
  type Tags,
} from '@src/typings'
import { GET, POST } from '@utils/axios'
import {
  addGoalButtonClasses,
  goalsSectionClasses,
  goalsTitleClasses,
} from './styles'

const fetcher = (url: string, id: number, quarter: number) =>
  GET(url, {
    params: {
      id: id,
      quarter,
    },
  }).then((res) => res.data)

const ReviewForm: React.FC<Props> = ({
  quarterSelected,
  designation_id,
  userId,
}) => {
  const [goals, setGoals] = useState(1)
  const addGoal = () => setGoals(prev => prev + 1)
  const { control, handleSubmit } = useForm<FormFields>()

  const { data, isLoading } = useSwr<ReviewTags<Tags>[]> (
    quarterSelected ? [`/api/users/review`, quarterSelected] : null,
    ([url, quarterSelected]) => fetcher(url, designation_id, quarterSelected)
  )

  let formFields: InputFieldDetails<Tags>[] = isLoading ? [] : 
    data!.map<InputFieldDetails<Tags>>(({ name, description, id }) => (
      {
        id: id,
        tag: `${name}.rating`,
        feedback: `${name}.reason`,
        label: name,
        desc: description,
      }
    ))

  const onSubmit: SubmitHandler<FormFields> = data => {
    const hideLoadingMessage = message.loading('Submitting Form', 0)
    
    POST('/api/users/review', { userId, ...data })
      .then(res => {
        hideLoadingMessage()
        message.success(res.data, 2.5)
      })
      .catch(() => {
        hideLoadingMessage()
        message.error('Could not submit form', 2.5)
      })
  }

  return <>
    <div className='flex flex-col items-center'>
      {formFields.length === 0 ? <p className='text-bold text-2xl'>No tags for review</p> : <>
        {formFields.map(({ id, ...fields }) =>
          <Rating key={id} control={control} {...fields} />
        )}
        <div className={goalsSectionClasses}>
          <Popover content='Goals for next quarter' placement='right'>
            <h2 className={goalsTitleClasses}>Goals</h2>
          </Popover>
          {Array.from(Array(goals)).map((_, index) => 
            <Goal key={`goals.${index}`} control={control} index={index} />
          )}
          <Popover content='Add another goal' placement='left'>
            <button className={addGoalButtonClasses} onClick={addGoal}>
              <AddIcon className='h-6 w-6 inline' />
            </button>
          </Popover>
        </div>
        <SubmissionModal submitForm={handleSubmit(onSubmit)} />
      </>}
    </div>
  </>
}

export default ReviewForm
