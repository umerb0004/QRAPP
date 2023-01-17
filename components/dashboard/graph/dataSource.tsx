export const dataSource = {
  chart: {
    Caption: 'Goals',
    subCaption: 'Graph to show all goals',
    captionAlignment:'center',
    theme: 'gammel',
    manageLabelOverflow:true,
    animation:true,
    animateClockwise:true,
    useEllipsesWhenOverflow:true,
    showToolTip:false,
    showLegend:false,
    showValues:false,
    captionFontSize:'20',
    centerLabelColor:'#000000',
    centerLabelBold:true,
    captionFontBold:true,
    labelFontColor:'#000000',
    smartLineColor:'#000000',
    centerlabel: '$value %',
    doughnutRadius: '80%'
  },
  data: [
    { label: 'Productivity', value: '15' },
    { label: 'Responsibility', value: '21' },
    { label: 'Management', value: '15' },
    { label: 'Innovation', value: '13' },
    { label: 'Work Ethics', value: '16' },
    { label: 'OwnerShip', value: '20' }
  ]
}
