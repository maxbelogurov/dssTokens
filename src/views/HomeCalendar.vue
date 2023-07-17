<template>
  <div class="col-12">
    <div class="my-3 p-2 bg-white rounded rounded-3 ">
      <p>Calendar template</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "HomeCalendar",
  computed: {
    ...mapGetters([
      'TOKENS',
    ]),
  },
}
</script>

<style scoped>

</style>