import { ReviewTable, MenuSidebar } from 'components'

import styles from '@styles/Review.module.css'
import { users } from 'dummyData/users'

export { getServerSideProps } from '../_app'

const Reviews = () => (
  <div className={styles.reviews_page}>
    <MenuSidebar />
    <ReviewTable data={users} />
  </div>
)

export default Reviews
