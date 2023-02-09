import axios from 'axios'
import { PencilIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

import { apis } from '@utils/constants'
import ModalEdit from '@src/components/ReviewTempleteTable/modalEdit'

const DataTable = ({ designation, number, tags }) => {
  const [check, setCheck] = useState(false)
  const [total, setTotal] = useState(0)

  const [weightage, setWeightage] = useState<[]>()

  useEffect(() => { getData() }, [check])

  const getData = async () => {
    const { data } = await axios.post(apis.reviewWeightage.url, { designation: designation.id })
    setWeightage(data.weight)

    let totalWeight = 0
    data.weight.map((item: { weightage: number }) => {
      totalWeight += item.weightage
    })
    setTotal(totalWeight)

    if (data.weight != undefined && data.weight.length != number) {
      let weightageArray = new Array(number - data.weight.length)
      weightageArray.fill(100 / number - data.weight.length, 0,)
      let weights = data.weight.concat(weightageArray)
      setWeightage(weights)
    }
  }

  return <div>
    <h3 className='font-semibold text-center  text-white bg-cyan-300 rounded-lg py-2 h-10 grid grid-cols-2 mb-5' onClick={() => setCheck(!check)}>
      {designation.name}<PencilIcon className='h-6 w-4 text-white ml-2' /></h3>
    <div>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto overflow-scroll'>
        <tbody>
          {weightage?.map(
            (item: { weightage: number }, key: number) => (
              <tr key={key} className='border-b dark:bg-gray-800 dark:border-gray-700 border-solid'>
                <th scope='row' className='px-2 py-4 font-medium text-center border-2 border-grey'>
                  {item.weightage ? item.weightage : 0}
                </th>
              </tr>
            )
          )}
          {weightage && <ModalEdit check={check} setCheck={setCheck} tags={tags} weightage={weightage} setWeightage={setWeightage} />}
          <tr className='border-b dark:bg-gray-800 dark:border-gray-700 border-solid '>
            <th scope='row' className='px-2 py-4 font-medium text-center border-2 border-grey'>
              {total}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}

export default DataTable
