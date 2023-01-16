import { dataSource } from './dataSource'

const chartConfigs = {
  type: 'doughnut2d',
  width: 380,
  height: 396,
  dataFormat: 'json',
  dataSource: dataSource
}

const GoalsGraph = () => {
  const FusionCharts = require('fusioncharts')
  const Charts =  require('fusioncharts/fusioncharts.charts')
  const FusionTheme = require('fusioncharts/themes/fusioncharts.theme.gammel')
  const { default: ReactFC } = require('react-fusioncharts')

  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

  return (
    <div className='w-max-screen-sm flex justify-center p-4  bg-white shadow-lg rounded-3xl max-h-96 overflow-y-hidden'>
      <ReactFC {...chartConfigs} />
    </div>
  )
}

export default GoalsGraph
