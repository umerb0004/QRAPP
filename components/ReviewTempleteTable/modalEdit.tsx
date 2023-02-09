import axios from 'axios'
import { useState } from 'react'

import { apis } from '@utils/constants'
import InputField from './inputField'
import { numberASCII } from '@utils/constants'

const ModalEdit = ({ check, setCheck, tags, weightage, setWeightage }) => {
  const [error, setError] = useState(false)
  const [data, setData] = useState([...weightage])

  const handler = ({ target }, setValue) => {
    const checkASCII = target.value.charCodeAt(target.value.length - 1)

    if (checkASCII >= numberASCII.start && checkASCII <= numberASCII.end) {
      setValue(target.value)
      data.map(
        (item) => {
          if (item.tag_id === target.id) item.weightage = parseInt(target.value)
        }
      )
    }
  }

  const changeWeightage = async () => {
    let total = data.reduce((prevResult, nextValue) => prevResult + nextValue.weightage, 0)

    if (total != 100) {
      setError(true)
    }
    else {
      const newWeightage = [...data]
      setWeightage(newWeightage)
      await axios.post(apis.weightageUpdate.url, { weightage: data })
      setError(false)
      setCheck(false)
    }
  }

  const close = () => {
    setData(weightage)
    setCheck(false)
  }

  return <>
    {check ? <>
      <div
        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
      >
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold'>
                Edit Weightage
              </h3>
            </div>
            <h3 className='text-red-800 text-center'>
              {error && 'Total Should be 100'}
            </h3>
            <div className='relative p-6 flex-auto grid grid-cols-3 py-2 gap-1'>
              <div className='col-span-2'>
                {tags.map((item, key) =>
                  <h4 key={key} className='mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    {item.name}
                  </h4>
                )}
              </div>
              <div>
                {data.map((item, key) =>
                  <InputField key={key} item={item} handler={handler} />
                )}
              </div>
            </div>
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => close()}
              >
                Close
              </button>
              <button
                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => changeWeightage()}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </> : null}
  </>
}

export default ModalEdit
