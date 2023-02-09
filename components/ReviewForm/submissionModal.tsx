import { useState } from 'react'

import { ModalComponent } from 'components'
import { type SubmissionModalProps as Props } from '@src/typings'
import {
  cancelButtonClasses,
  confirmButtonClasses,
  submitButtonClasses,
} from './styles'

const SubmissionModal: React.FC<Props> = ({ submitForm }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const showModal = () => setModalOpen(true)
  const hideModal = () => setModalOpen(false)

  const handleSubmit = () => {
    hideModal()
    submitForm()
  }

  return (
    <>
      <div className='ml-auto'>
        <button onClick={showModal} className={submitButtonClasses}>
          Submit
        </button>
        <ModalComponent
          centered
          closeable={false}
          destroyOnClose={true}
          closeModal={hideModal}
          isVisible={modalOpen}
        >
          <div className='p-5'>
            <div className='flex justify-center items-center m-3'>
              <p className='text-2xl font-medium'>Confirm Form Submission?</p>
            </div>
            <div className='flex flex-row justify-end'>
              <button
                key='cancel'
                onClick={hideModal}
                className={cancelButtonClasses}
              >
                Cancel
              </button>
              <input
                type='submit'
                className={confirmButtonClasses}
                value='Confirm'
              />
            </div>
          </div>
        </ModalComponent>
      </div>
    </>
  )
}

export default SubmissionModal
