import Router from 'next/router'

const ModalSuccess = ({ showModal, setShowModal, checkRatings }) => <>
  {showModal && (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none' >
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='relative p-6 flex-auto'>
              {!checkRatings ? <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                Review Added Successfully
              </p> : <p>Please do the rating of all things</p>}
            </div>
            <div className='flex items-center justify-end p-6 rounded-b'>
              {!checkRatings ?
                <button
                  className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => {
                    setShowModal(false)
                    Router.push('/reviews/pending')
                  }}
                >
                  Okay
                </button> : <button
                  className='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => {
                    setShowModal(false)
                  }}
                >
                  Okay
                </button>}
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  )}
</>

export default ModalSuccess

