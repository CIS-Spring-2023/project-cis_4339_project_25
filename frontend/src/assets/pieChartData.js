export const data= { //temporary chart data
    type: "pie",
    labels: [
      '77028',
      '77009',
      '77056'
    ],
    datasets: [{
      label: 'Customers by Zip Code',
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

export default PieChartData;