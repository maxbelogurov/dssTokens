<template>
  <div class="container-fluid bg-secondary bg-gradient min-vh-100">
    <my-header></my-header>
    <div class="row">
      <my-home-table></my-home-table>
      <my-home-calendar></my-home-calendar>
    </div>
<!--    <div v-if="this.HOME_TEMPLATE === 'table'" class="row">-->
<!--      <my-home-table></my-home-table>-->
<!--    </div>-->
<!--    <div v-else-if="this.HOME_TEMPLATE === 'calendar'" class="row">-->
<!--      <my-home-calendar></my-home-calendar>-->
<!--    </div>-->
<!--    <div v-else class="row">-->
<!--      <p>Ошибка</p>-->
<!--    </div>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyHeader from  '@/components/Header'
import MyHomeTable from '@/views/HomeTable'
import MyHomeCalendar from '@/views/HomeCalendar'

export default {
  name: 'HomeView',
  components: {MyHeader, MyHomeTable, MyHomeCalendar},
  computed: {
    ...mapGetters([

    ]),
  },
  methods: {
  },
  data() {
    return {
    }
  },
  created() {
    // this.$store.dispatch('getTokens');
  }
}
</script>
