<template>
  <div class="col-12 ">
    <div class="my-3 p-2 bg-white rounded rounded-3 ">
      <div class="row">
        <div class="col-md-3 py-5">
          <Calendar
              expanded
              :columns="columns"
              :attributes='tokens' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
import { ref, computed } from 'vue';
import { useScreens } from 'vue-screen-utils';


export default {
  name: "HomeCalendar",
  components: { Calendar },
  data() {
    return {
      tokens: [
        {
          key: 'today',
          highlight: 'blue',
          dates: new Date(),
        },
        {
          key: '123',
          highlight: 'red',
          dates: new Date('2023-08-20T19:55:56+00:00'),
          popover: {
            label:'Дорспецсервис',
          },
        },
      ],
      columns: undefined,
    };
  },
  computed: {
    ...mapGetters([
      'TOKENS',
    ]),
  },
  mounted() {
    const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
    this.columns = mapCurrent({ md: 2, lg: 2 }, 1);
  }
}
</script>

<style scoped>

</style>