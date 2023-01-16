import { type MouseEventHandler } from 'react'
import { useCallback, useState, useEffect } from 'react'

import ReviewFrom from './form'
import type { ReviewModalProps as Props } from '@src/typings'

const ReviewFormModal = (props: Props) => {
  const [show, setShow] = useState(false)

  const hideModal = () => setShow(false)
  const showModal = () => setShow(true)

  const handleOutsideClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    ({ target }) => {
      const { className } = target as Element
      const classes = typeof className === 'string' ? className.split(' ') : []
      if (classes.includes('modal-container')) hideModal()
    },
    []
  )

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset'
  }, [show])

  return (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
        onClick={showModal}
      >
        Add Review
      </button>
      {show && (
        <>
          <div
            className='modal-container flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full backdrop-blur-sm px-auto py-auto'
            onClick={handleOutsideClick}
          >
            <div className='relative min-w-[40%] my-auto'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='relative p-6 flex-auto'>
                  <ReviewFrom {...props} hideModal={hideModal} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ReviewFormModal
