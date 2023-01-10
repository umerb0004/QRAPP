import { type MouseEventHandler } from 'react'
import { useState, useEffect } from 'react'

import ReviewFrom from './form'
import type { ReviewFormProps as Props } from '@src/typings'

const Modal = (props: Props) => {
  const [show, setShow] = useState(false)

  const hideModal = () => setShow(false)
  const showModal = () => setShow(true)

  const handleOutsideClick: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    const classes = (target as Element).className.split(' ')
    if (classes.includes('modal-container')) hideModal()
  }

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset'
  }, [show])

  return <>
    <button
      className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
      onClick={showModal}
    >
      Add Review
    </button>
    {show && <>
      <div
        className='modal-container flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full backdrop-blur-sm px-auto py-auto'
        onClick={handleOutsideClick}
      >
        <div className='modal-container relative min-w-[40%] my-auto'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='relative p-6 flex-auto'>
              <ReviewFrom {...props} />
            </div>
            <div className='flex items-center justify-end px-6 pb-6 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-3 rounded border-2 border-blue-500 text-sm outline-none focus:outline-none hover:bg-red-500 hover:text-white mr-1 mb-1'
                type='button'
                onClick={hideModal}
              >
                Close
              </button>
              <button
                className='text-white bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none mr-1 mb-1'
                type='button'
                onClick={hideModal}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>}
  </>
}

export default Modal
