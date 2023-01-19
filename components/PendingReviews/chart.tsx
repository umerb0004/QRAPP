import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

import { chartProps } from '@src/typings'

const options = {
  plugins: {
    legend: {
      display: false
    }
  }
}

const PieChart = ({ data }: { data: chartProps }) => (
  <Pie data={data} options={options} width={100} height={100} />
)

export default PieChart