import dynamic from 'next/dynamic'

import SyncMembers from '@comp/Dashboard/BiWeeklySyncMembers'
import Card from '@comp/Dashboard/card'

const GoalsGraph = dynamic(() => import('@comp/Dashboard/Graph'))

const Dashboard = () => (
  <section className='container py-5 pl-5 pr-1 bg-slate-50'>
    <Card />
    <div className='flex justify-between mt-4'>
      <div className='w-6/12 mr-4'>
        <SyncMembers />
      </div>
      <div className='w-6/12'>
        <GoalsGraph></GoalsGraph>
      </div>
    </div>
  </section>
)

export default Dashboard
