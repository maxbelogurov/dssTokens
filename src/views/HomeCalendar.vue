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
      tokens: [],
      columns: undefined,
    };
  },
  computed: {
    ...mapGetters([
      'TOKENS',
    ]),
  },
  methods: {
    setTokensToCalendar() {
      // set today
      this.tokens.push({
        key: 'today',
        highlight: 'blue',
        dates: new Date(),
      })
      //set tokens
      this.TOKENS.forEach((e) => {
        if(!e.archived) {
          let newDate = {
            key: e.key_id,
            highlight: 'red',
            dates: new Date(e.date_end),
            popover: {
              label: e.company_name
            }
          }
          this.tokens.push(newDate)
        }
      })
    }
  },
  mounted() {
    const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
    this.columns = mapCurrent({ md: 2, lg: 2 }, 1);
    this.setTokensToCalendar();
  }
}
</script>

<style scoped>

</style>