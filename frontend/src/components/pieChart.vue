<template>
    <div>
        <canvas id="PieChart"></canvas>
    </div>
</template>

<script>
  import {Chart, registerables} from 'chart.js'
  import PieChartData from '../assets/pieChartData'

  Chart.register(...registerables);
  export default {
    data(){
        return {
            PieChartData: PieChartData
        }
    },
    mounted(){
        const ctx = document.getElementById('PieChart')
        new Chart (ctx, this.PieChartData)
    }
  }
</script>