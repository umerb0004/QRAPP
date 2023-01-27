import Link from 'next/link'

import UserDetail from '@comp/PendingReviews/userDetail'
import { currentUser, usersProps } from '@src/typings'
import { usersTabelHeads } from '@utils/constants'
import { ViewIcon, EditIcon } from '@public/Icons'
import {
  usersTableClsses,
  usersTableRowClasses,
  userTableHeadClasses,
} from '@comp/PendingReviews/style'

interface Props {
  currentData: usersProps[]
  currentUser: currentUser
}

const UsersTable = ({ currentData, currentUser }: Props) => (
  <div className='overflow-x-auto relative shadow-md'>
    <table className={usersTableClsses}>
      <thead className={userTableHeadClasses}>
        <tr>
          {usersTabelHeads.map(({ heading, left }, index) => (
            <th scope='col' key={index} className={`${left && 'text-left'} py-3 px-6`}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData ? (
          currentData.map(
            ({
              id,
              lead_id,
              first_name,
              last_name,
              joining_date,
              Designations,
              email,
              profile_pic,
            }) => (
              <tr key={id} className={usersTableRowClasses}>
                <td className='py-4 px-6'>
                  <UserDetail
                    pic={profile_pic}
                    name={first_name + ' ' + last_name}
                    email={email}
                  />
                </td>
                <td className='py-4 px-6'>{joining_date.split('', 10)}</td>
                <td className='py-4 px-6'>{Designations.name}</td>
                <td className='py-4 px-6'>
                  {lead_id !== parseInt(currentUser.id) ? (
                    <div className='inline-flex justify-between w-14'>
                      <Link href='/'><span><ViewIcon /></span></Link>
                      <Link href='/'><span><EditIcon /></span></Link>
                    </div>
                  ) : (
                    <Link
                      rel='noreferrer'
                      className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
                      href={{
                        pathname: '/reviews/pending/add-review/[userId]',
                        query: { userId: id },
                      }}
                      passHref
                    >
                      Add review
                    </Link>
                  )}
                </td>
              </tr>
            )
          )
        ) : <p className='text-4xl'>No Data Exist</p>}
      </tbody>
    </table>
  </div>
)

export default UsersTable
