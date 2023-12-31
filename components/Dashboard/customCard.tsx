import styles from '@styles/Dashboard.module.css'

const CustomCard = ({ icon, title, value }) => (
  <button className='custom-card'>
    <div className='icon leading-loose text-white bg-emerald-500'>
      <i className={icon}></i>
    </div>
    <h2 className={styles.pending}>{title}</h2>
    <b>{value}</b>
  </button>
)

export default CustomCard
