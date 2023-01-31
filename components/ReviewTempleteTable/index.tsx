import { ReviewTag } from '@src/typings'

const ReviewTempleteTable = ({ data }) => <div>
  <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto overflow-scroll'>
    <tbody>
      {data.map((item: ReviewTag, key: number) => (
        <tr key={key} className='border-b dark:bg-gray-800 dark:border-gray-700 bg-blue-900'>
          <th scope='row' className='px-2 py-4 font-medium text-center text-white border-2 border-grey'>
            {item.name}
          </th>
        </tr>
      ))}
      <tr className='border-b dark:bg-gray-800 dark:border-gray-700 bg-blue-900'>
        <th scope='row' className='px-2 py-4 font-medium text-center text-white border-2 border-grey'>
          Total :
        </th>
      </tr>
    </tbody>
  </table>
</div>

export default ReviewTempleteTable
