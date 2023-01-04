import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

import { chartProps } from '@src/typings'

interface Props {
  data: chartProps
}

const DoughNut = ({ data } : Props) => {
  return <Doughnut data={data} width={205} height={180} />
}

export default DoughNut
