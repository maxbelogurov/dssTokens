<template>
  <div class="container-fluid bg-secondary bg-gradient min-vh-100">
    <my-header></my-header>
    <div class="row">
      <my-home-table></my-home-table>
      <my-home-calendar></my-home-calendar>
    </div>
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
    this.$store.dispatch('checkAuthToken');
    this.$store.dispatch('getTokens');
  }
}
</script>
