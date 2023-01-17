import styles from '@styles/Dashboard.module.css'

const CustomCard = ({ icon, title, value }) => (
  <button className='custom-card'>
    <div className='icon'>
      <i className={icon}></i>
    </div>
    <h2 className={styles.pending}>{title}</h2>
    <b>{value}</b>
  </button>
)

export default CustomCard
