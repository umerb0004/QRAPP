import Image from 'next/image'
import classNames from 'classnames'

export function TableRow() {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='p-4 w-4'>
        <div className='flex items-center'>
          <button
            type='button'
            className={classNames(`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br
                                  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
                                  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`)}>
              Open
          </button>
        </div>
      </td>
      <th scope='row' className='flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white'>
        <Image
          className='w-10 h-10 rounded-full'
          src='/User_icon.svg.webp'
          alt='User image'
          width= {50}
          height= {50}
        />
        <div className='pl-3'>
          <div className='text-base font-semibold'>Neil Sims</div>
          <div className='font-normal text-gray-500'>neil.sims@flowbite.com</div>
        </div>
      </th>
      <td className='py-4 px-6'>
        1/12/2022
      </td>
      <td className='py-4 px-6'>
        <div className='flex items-center'>
          <div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2'></div> Lead
        </div>
      </td>
      <td className='py-4 px-6'>
        <div>
          <button
            type='button'
            className={classNames(`py-2 px-3 text-xs font-medium text-center text-white bg-green-700 rounded-lg 
                                  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
                                  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`)}>
              Approve
          </button>
          <button
            type='button'
            className={classNames(`py-2 px-3 text-xs font-medium text-center text-white bg-red-700 rounded-lg
                                  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 
                                  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`)}>
              Disapprove
          </button>
        </div>
      </td>
    </tr>
  )
}
