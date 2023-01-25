import UsersTable from '@comp/PendingReviews/usersTable'
import Pagination from '../pagination'

const PendingReviews = () => (
  <Pagination table={UsersTable} apiAddress={`/api/users/`}/>
)

export default PendingReviews
