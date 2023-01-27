import { Select } from 'antd'
import { useState } from 'react'

import Form from './form'
import { PageTitle, ProfileImage } from 'components'
import { type ReviewPageProps as Props } from '@src/typings'
import Sidebar from './sidebar'
import {
  currentQuarter,
  currentYear,
  previousQuarter,
  previousYear,
} from '@utils/constants'
import {
  formBodyClasses,
  formHeaderClasses,
  quarterHeadingClasses,
  reviewFormPageClasses,
  userDetailsClasses,
} from './styles'

const ReviewForm: React.FC<Props> = ({ user, quarterReview }) => {
  const {
    id: userId,
    first_name,
    last_name,
    email,
    profile_pic,
    designation_id,
  } = user
  const [quarterSelected, setQuarterSelected] = useState(currentQuarter)

  const year =
    currentQuarter === 1 && quarterSelected === 4 ? previousYear : currentYear

  return <>
    <div className='flex flex-row w-screen'>
      <div className='w-full h-screen overflow-y-scroll overscroll-contain'>
        <div className={reviewFormPageClasses}>
          <div className='pl-4 pt-6'>
            <PageTitle title='Quarterly Review' />
          </div>
          <div className={formBodyClasses}>
            <div className='h-full'>
              <h1 className={quarterHeadingClasses}>
                Q
                <Select
                  className='mx-1'
                  defaultValue={currentQuarter}
                  onChange={(value) => setQuarterSelected(value)}
                  options={[
                    {
                      value: currentQuarter,
                      label: currentQuarter,
                    },
                    {
                      value: previousQuarter,
                      label: previousQuarter,
                    },
                  ]}
                />
                {year} Review
              </h1>
            </div>
            <div className={formHeaderClasses}>
              <ProfileImage
                src={profile_pic}
                alt='profile image'
                h='h-16'
                w='w-16'
                fill
              />
              <div className={userDetailsClasses}>
                <p>
                  Name:{' '}
                  <span className='font-normal'>{`${first_name} ${last_name}`}</span>
                </p>
                <p>
                  Email: <span className='font-normal'>{email}</span>
                </p>
              </div>
            </div>
            <Form
              userId={userId}
              designation_id={designation_id}
              quarterSelected={quarterSelected}
            />
          </div>
        </div>
      </div>
      <Sidebar quarterSelected={quarterSelected} {...quarterReview} />
    </div>
  </>
}

export default ReviewForm
