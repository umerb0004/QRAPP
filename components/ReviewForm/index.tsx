import { useState, useMemo, type MouseEventHandler } from 'react'

import ReviewFrom from '@comp/ReviewForm/form'
import type { ReviewFormProps as Props } from '@src/typings'

import {
  addReviewBtnClasses, addReviewModalClasses, modalCloseClasses,
  reviewModalBtnsClasses, reviewModalInnerClasses,
  reviewFormBoxClasses, modalSubmitClasses,
} from '@comp/ReviewForm/style'

const Modal = (props: Props) => {
  const [show, setShow] = useState(false)

  const toggleModel = () => setShow(!show)

  const handleOutsideClick: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    const classes = (target as Element).className.split(' ')
    if (classes.includes('modal-container')) toggleModel()
  }

  useMemo(() => document.body.style.overflow = show ? 'hidden' : 'unset', [show])

  return <>
    <button className={addReviewBtnClasses} onClick={toggleModel}>
      Add Review
    </button>
    {show && (
      <div className={addReviewModalClasses} onClick={handleOutsideClick}>
        <div className={reviewModalInnerClasses}>
          <div className={reviewFormBoxClasses}>
            <div className='relative p-6 flex-auto'>
              <ReviewFrom {...props} />
            </div>
            <div className={reviewModalBtnsClasses}>
              <button className={modalCloseClasses} type='button' onClick={toggleModel}>
                Close
              </button>
              <button className={modalSubmitClasses} type='button' onClick={toggleModel}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
}

export default Modal
