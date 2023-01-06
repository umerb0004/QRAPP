import Lottie from 'react-lottie'

import lottieFile from '../../public/welcome_bot.json'

import styles from '@styles/Dashboard.module.css'

const Dashboard = () => {
  return <>
    <section className='container py-5 pl-5 pr-1 bg-slate-50'>
      <div className='card'>
        <div className='col-md-12'>
          <div className='flex align-items-center'>
            <div className='col-md-5 pl-5 Lottie'>
              <Lottie
                height={300}
                width={300}
                options={{
                  loop: true,
                  animationData: lottieFile,
                  autoplay: true,
                }}
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
        <div className='flex justify-between'>
          <button className='custom-card w-5/12'>
            <h2>
              <b className='mr-4'>10</b>
              <span className={styles.pending}>Pending Reviews</span>
              <i className='ml-5 icon fa-solid fa-pen-to-square' />
            </h2>
          </button>
          <button className='custom-card w-5/12'>
            <h2>
              <b className='mr-4'>10</b>
              <span className={styles.pending}>Pending Approval Reviews</span>
              <i className='ml-5 fa-solid fa-ranking-star' />
            </h2>
          </button>
        </div>
      </div>
    </section>
  </>
}

export default Dashboard
