import { Sidebar } from '../../components/Sidebar'
import { Table } from '../../components/reviewTable'
import styles from '../../styles/Review.module.css'

export default function reviews() {
  return (
    <div className={styles.reviews_page}>
      <Sidebar />
      <Table />
    </div>
  )
}
