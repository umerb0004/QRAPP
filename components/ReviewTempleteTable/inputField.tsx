import { useState } from 'react'

const InputField = ({ item, handler }) => {
  const [value, setValue] = useState(item.weightage)

  return <>
    <input
      className='mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
      type='number' id={item.tag_id} onChange={(event) => { setValue(event.target.value); handler(event) }} placeholder={item.weightage}
      value={value}
    />
  </>
}

export default InputField
