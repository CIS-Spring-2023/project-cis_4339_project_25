<template> <!--gathered from lecture, -->
    <div>
        <canvas id="PieChart"></canvas> <!--empty canvas to place chart into-->
    </div>
</template>

<script>
  import {Chart, registerables} from 'chart.js'
  import PieChartData from '../assets/pieChartData'

  Chart.register(...registerables); 
  export default {
    data(){ //Gathers data from pieChartData.js file at the moment
        return {
            PieChartData: PieChartData
        }
    },
    mounted(){ //mounts chart
        const ctx = document.getElementById('PieChart') //into the canvas at the top
        new Chart (ctx, this.PieChartData)
    }
  }
</script>