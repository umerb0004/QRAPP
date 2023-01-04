import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import * as Icons from '../../components/Icons'

import styles from '../../styles/Review.module.css'

export function TableRow(props) {
  const row = props.data

  return (
    <tr key={row.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
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
          <div className='text-base font-semibold'>{row.first_name + ' ' +  row.last_name}</div>
          <div className='font-normal text-gray-500'>{row.email}</div>
        </div>
      </th>
      <td className='py-4 px-6'>
        ASE
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
          <div className='text-base font-semibold'>John Jerry</div>
          <div className='font-normal text-gray-500'>john.jerry@flowbite.com</div>
        </div>
      </th>
      <td className='py-4 px-6'>
        <div className={styles.review_table_actions}>
          <Link href='/'>
          <span><Icons.ViewIcon/></span>
          </Link>
          <Link href='/'>
            <span><Icons.EditIcon/></span>
          </Link>
        </div>
      </td>
    </tr>
  )
}
