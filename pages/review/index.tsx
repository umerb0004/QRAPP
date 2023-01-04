import { MenuSidebar } from '../../components/MenuSidebar'
import { Table } from '../../components/reviewTable'
import { users } from '../../dummyData/users'

import styles from '../../styles/Review.module.css'

export default function reviews() {
  const Allusers = users

  return (    
    <div className={styles.reviews_page}>
      <MenuSidebar />
      <Table data={users}/>
    </div>
  )
}
