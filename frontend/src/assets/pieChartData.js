const data = { //hard-coded data as placeholder
    labels: [
      '77007',
      '77008',
      '77009'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const PieChartData = { //configures the Pie Chart, https://www.chartjs.org/docs/latest/charts/doughnut.html#pie
    type:'pie',
    data: data,
}

export default PieChartData; //alows chart to be used elsewhere