<template>
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3 my-3">
    <Calendar expanded :attributes='tokens'/>
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
      tokens: [],
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
    this.setTokensToCalendar();
  }
}
</script>

<style scoped>

</style>