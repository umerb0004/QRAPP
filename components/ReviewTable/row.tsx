import Image from 'next/image'
import Link from 'next/link'

import { ViewIcon, EditIcon } from '@public/Icons'
import { reviewTableRowClasses, openBtnClasses, userBoxClasses } from '@comp/ReviewTable/style'
import styles from '@styles/Review.module.css'

const TableRow = ({ data }) => (
  <tr key={data.id} className={reviewTableRowClasses}>
    <td className='p-4 w-4'>
      <div className='flex items-center'>
        <button type='button' className={openBtnClasses}>
          Open
        </button>
      </div>
    </td>
    <th scope='row' className={userBoxClasses}>
      <Image
        className='w-10 h-10 rounded-full'
        src='/User_icon.svg.webp'
        alt='User image'
        width={50}
        height={50}
      />
      <div className='pl-3'>
        <div className='text-base font-semibold'>{data.first_name + ' ' + data.last_name}</div>
        <div className='font-normal text-gray-500'>{data.email}</div>
      </div>
    </th>
    <td className='py-4 px-6'>
      ASE
    </td>
    <th scope='row' className={userBoxClasses}>
      <Image
        className='w-10 h-10 rounded-full'
        src='/User_icon.svg.webp'
        alt='User image'
        width={50}
        height={50}
      />
      <div className='pl-3'>
        <div className='text-base font-semibold'>John Jerry</div>
        <div className='font-normal text-gray-500'>john.jerry@flowbite.com</div>
      </div>
    </th>
    <td className='py-4 px-6'>
      <div className={styles.review_table_actions}>
        <Link href='/'>
          <span><ViewIcon /></span>
        </Link>
        <Link href='/'>
          <span><EditIcon /></span>
        </Link>
      </div>
    </td>
  </tr>
)

export default TableRow
