<template>
    <div>
        <canvas id="PieChart"></canvas> <!-- Place to put pie chart into-->
    </div>
</template>

<script>
  import {Chart, registerables} from 'chart.js'
  import PieChartData from '../assets/pieChartData'

  Chart.register(...registerables);
  export default {
    data(){ //Temporary hard coded data to be used
        return {
            PieChartData: PieChartData
        }
    },
    mounted(){ //mounts chart on canvas
        const ctx = document.getElementById('PieChart') //mounts chart into the canvas
        new Chart (ctx, this.PieChartData)
    }
  }
</script>