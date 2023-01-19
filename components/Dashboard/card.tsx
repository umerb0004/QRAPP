import Image from 'next/image'

import CustomCard from '@comp/Dashboard/customCard'

const Card = () => (
  <div className='card'>
    <div className='col-md-12'>
      <div className='flex align-items-center'>
        <div className='col-md-4 pl-5 Lottie'>
          <Image
            src='/welcome.gif'
            alt='Picture of the author'
            width={300}
            height={300}
          />
        </div>
        <div className='col-md-8 card-container'>
          <div className='flex'>
            <CustomCard
              icon='fa-solid fa-star'
              title='Pending Reviews'
              value={200}
            />
            <CustomCard
              icon='fa-sharp fa-solid fa-bolt'
              title='Pending Approvals'
              value={300}
            />
            <CustomCard
              icon='fa-solid fa-angles-up'
              title='Biweekly Syncs'
              value={5}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
