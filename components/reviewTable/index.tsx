import classNames from 'classnames'
import { TableHeaders } from '../menuSidebar/menu'
import PaginatedTable from './pagination'

export function Table(props) {
  const usersReviews = props.data

  return <>
    <div className='h-screen flex-1 p-4 bg-slate-50'>
      <h3 className='font-medium leading-tight text-3xl mt-0 mb-2 text-black-600 p-2'>Reviews</h3>
      <div className='relative shadow-md sm:rounded-lg'>
        <div className='pb-4 dark:bg-gray-900'>
          <div className='relative float-right p-2'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'>
                  </path>
              </svg>
            </div>
            <input
              type='text' 
              id='table-search-users'
              className={classNames(`block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                                    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`)}
              placeholder='Search for users' />
          </div>
        </div>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
              </th>
              <th scope='col' className='py-3 px-6'>
                {TableHeaders[0]}
              </th>
              <th scope='col' className='py-3 px-6'>
                {TableHeaders[1]}
              </th>
              <th scope='col' className='py-3 px-6'>
                {TableHeaders[2]}
              </th>
              <th scope='col' className='py-3 px-6'>
                {TableHeaders[3]}
              </th>
            </tr>
          </thead>
          <tbody>
            <PaginatedTable data={usersReviews}/>
          </tbody>
        </table>
      </div>
    </div>
  </>
}
