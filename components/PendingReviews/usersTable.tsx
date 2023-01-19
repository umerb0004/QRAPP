import ReviewFormModal from '@comp/ReviewFormModal'
import UserDetail from '@comp/PendingReviews/userDetail'

import { usersProps } from '@src/typings'
import { usersTabelHeads } from '@utils/constants'
import { usersTableClsses, usersTableRowClasses, userTableHeadClasses } from '@comp/PendingReviews/style'

interface Props {
  currentUsers: usersProps[]
}

const UsersTable = ({ currentUsers }: Props) => (
  <div className='overflow-x-auto relative shadow-md'>
    <table className={usersTableClsses}>
      <thead className={userTableHeadClasses}>
        <tr>
          {usersTabelHeads.map(({ heading, left }, index) => (
            <th scope='col' className={`${left ? 'text-left' : ''} py-3 px-6`} key={index}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentUsers ? (currentUsers.map(({
          id, first_name, last_name, joining_date, Designations, email, profile_pic, designation_id
        }) => (
          <tr key={id} className={usersTableRowClasses}>
            <td className='py-4 px-6'>
              <UserDetail pic={profile_pic} name={first_name + ' ' + last_name} email={email} />
            </td>
            <td className='py-4 px-6'>{joining_date.split('', 10)}</td>
            <td className='py-4 px-6'>{Designations.name}</td>
            <td className='py-4 px-6'>
              <ReviewFormModal
                id={parseInt(id)}
                designation_id={designation_id}
                first_name={first_name}
                last_name={last_name}
                email={email}
                profile_pic={profile_pic}
              />
            </td>
          </tr>
        ))
        ) : (<p className='text-4xl'>No Data Exist</p>)}
      </tbody>
    </table>
  </div>
)

export default UsersTable