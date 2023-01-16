import MenuSidebar from '../../components/menuSidebar'
import { Table } from '../../components/reviewTable'
import { users } from '../../dummyData/users'

import styles from '@styles/Review.module.css'

export { getServerSideProps } from '../_app'

const Reviews = () => (
  <div className={styles.reviews_page}>
    <MenuSidebar />
    <Table data={users} />
  </div>
)

export default Reviews
