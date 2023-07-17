<template>
    <div class="progress" role="progressbar" aria-label="Success example"
         data-bs-toggle="tooltip" data-bs-placement="top" :title="daysLeft"
         :aria-valuenow="percentDaysLeft"
         aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped"
           :class="styleProgress"
           :style="'width: ' + percentDaysLeft + '%'"></div>
    </div>
</template>

<script>
import {Tooltip} from "bootstrap";
export default {
  name: "ProgressLine",
  props: ['dateEnd'],
  computed: {
    daysLeft() {
      const oneDay = 1000 * 60 * 60 * 24 // one day in milliseconds
      let today = new Date()
      let endDate = new Date(this.$props.dateEnd)
      let msLeft = endDate.getTime() - today.getTime()
      return Math.trunc(msLeft/oneDay)
    },
    percentDaysLeft() {
      // const oneDay = 1000 * 60 * 60 * 24 // one day in milliseconds
      // let today = new Date()
      // let endDate = new Date(this.$props.dateEnd)
      // let msLeft = endDate.getTime() - today.getTime()
      // msLeft = Math.trunc(msLeft/oneDay)
      let percent = Math.trunc(this.daysLeft * 0.2739)
      if (percent > 100) {
        return 100
      } else if (percent < 1) {
        return 1
      } else {
        return percent
      }
    },
    styleProgress() {
      let days = this.daysLeft
      if(days > 50) {
        return 'bg-success'
      } else if ( days > 20 ) {
        return 'bg-warning'
      } else {
        return 'bg-danger'
      }
    }
  },
  mounted() {
    // initialization bootstrap tooltips
    new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    })
  }
}
</script>

<style scoped>

</style>