<template>
  <div class="col-12">
    <div class="my-3 p-2 bg-white rounded rounded-3 ">
      <p>Calendar template</p>
      <Calendar
          :columns="2"
          :attributes='tokens' />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
import { ref, computed } from 'vue';
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
      // date: undefined,
    };
  },
  computed: {
    ...mapGetters([
      'TOKENS',
    ]),
  },
  mounted() {
    // this.date = ref([
    //   {
    //     highlight: true,
    //     dates: new Date(),
    //   },
    // ]);
  }
}
</script>

<style scoped>

</style>