import dynamic from 'next/dynamic'
import Image from 'next/image'
import SyncMembers from './biWeeklySyncMembers'

import styles from '@styles/Dashboard.module.css'

const GoalsGraph = dynamic(() => import('./graph'))

const Dashboard = () => <>
  <section className='container py-5 pl-5 pr-1 bg-slate-50'>
    <div className='card'>
      <div className='col-md-12'>
        <div className='flex align-items-center'>
          <div className='pl-5 col-md-5 Lottie'>
            <Image
              src='/welcome.gif'
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </div>
          <div className='col-md-7'>
            <h1>
              <b>WELCOME</b>
            </h1>
            <p className={`${styles.paragraph} mt-1`}>Devsinc Family</p>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-4'>
      <div className='flex justify-between pending-component'>
        <button className='w-5/12 custom-card'>
          <h2>
            <b className='mr-4'>10</b>
            <span className={styles.pending}>Pending Reviews</span>
            <i className='ml-5 icon fa-solid fa-pen-to-square' />
          </h2>
        </button>
        <button className='w-5/12 custom-card'>
          <h2>
            <b className='mr-4'>10</b>
            <span className={styles.pending}>Pending Approval Reviews</span>
            <i className='ml-5 fa-solid fa-ranking-star' />
          </h2>
        </button>
      </div>
    </div>
    <div className='flex justify-between'>
      <div className='flex-row w-5/12 mt-4'>
        <SyncMembers />
      </div>
      <div className='flex-row w-5/12 mt-4'>
        <GoalsGraph></GoalsGraph>
      </div>
    </div>
  </section>
  </>

export default Dashboard
