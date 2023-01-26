import { usersProps } from '@src/typings'

interface Props {
  currentData: usersProps[]
}

const Teams = ({ currentData }: Props) => {
  return (
    <>
      <div className='grid place-items-center'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='text-md text-gray-700 bg-gray-100 border-gray-600 '>
              <th scope='col' className='py-3 px-6'>
                SR#
              </th>
              <th scope='col' className='py-3 px-6'>
                Employee ID
              </th>
              <th scope='col' className='py-3 px-6'>
                Name
              </th>
              <th scope='col' className='py-3 px-6'>
                Designation
              </th>
              <th scope='col' className='py-3 px-6'>
                Email
              </th>
              <th scope='col' className='py-3 px-6'>
                Status
              </th>
            </tr>
          </thead>

          <tbody className='bg-white'>
            {(currentData && currentData.length !== 0) ? (
              currentData.map((user, index) => (
                <tr
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  key={user.id}
                >
                  <td className='py-4 px-6'>{index+1}</td>
                  <td className='py-4 px-6'>{user.employee_id}</td>
                  <td className='py-4 px-6'>
                    {user.first_name} {user.last_name}
                  </td>
                  <td className='py-4 px-6'>{user.Designations.name}</td>
                  <td className='py-4 px-6'>{user.email}</td>
                  <td className='py-4 px-6'>{`${user.on_leave ? 'on Leave' : 'On Duty'}`}</td>
                </tr>
              ))
            ) : (
              <p className='text-4xl'>No Data Exist</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Teams
