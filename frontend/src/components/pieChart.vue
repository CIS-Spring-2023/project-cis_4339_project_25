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
            PieChartData:PieChartData, //[],
            labels:[],
            zipData:[]
        }
    },
    /*method:{
    async getZipEventData() { //will get data for PieChart
      try {
        this.error = null
        this.loading = true
        const pieresponse = await axios.get(`${apiURL}/clients/zipCode`)
        this.PieChartData = pieresponse.data
        this.pielabels = pieresponse.data.map(
          (item) => `${item.name}`
        )
        this.pieChartData = pieresponse.data.map((item) => item.attendees.length)
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: 'Server Response',
            message: err.message
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: 'Unable to Reach Server',
            message: err.message
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: 'Application Error',
            message: err.message
          }
        }
      }
      this.loading = false
    }
    },*/
    mounted(){ //mounts chart on canvas
        this.getZipEventData
        const ctx = document.getElementById('PieChart') //mounts chart into the canvas
        new Chart (ctx, this.PieChartData)
    }
  }
</script>