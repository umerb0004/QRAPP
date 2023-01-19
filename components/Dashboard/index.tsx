import dynamic from 'next/dynamic'

import SyncMembers from '@comp/Dashboard/BiWeeklySyncMembers'
import Card from '@comp/Dashboard/card'

const GoalsGraph = dynamic(() => import('@comp/Dashboard/Graph'))

const Dashboard = () => (
  <section className='container py-5 pl-5 pr-1 bg-slate-50'>
    <Card />
    <div className='flex justify-between'>
      <div className='flex-row w-5/12 mt-4'>
        <SyncMembers />
      </div>
      <div className='flex-row w-5/12 mt-4'>
        <GoalsGraph></GoalsGraph>
      </div>
    </div>
  </section>
)

export default Dashboard
