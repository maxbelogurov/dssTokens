<template>
  <div class="col-12 col-md-12 col-lg-8 col-xl-9">
    <div class="my-3 p-2 bg-white rounded rounded-3 ">
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr class="small text-uppercase">
            <th scope="col">id</th>
            <th scope="col">Company</th>
            <th scope="col">User</th>
            <th scope="col">End date</th>
            <th scope="col">Days left</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="token in this.TOKENS" class="align-middle">
            <td>
              <button @click="removeToken(token.key_id)" class="btn btn-outline-danger btn-sm px-1" style="line-height: 0.8rem">
                <svg width="1rem" height="1rem" fill="currentColor">
                  <use xlink:href="@/assets/ico/bootstrap-icons.svg#trash"/>
                </svg>
              </button>
              {{token.key_id}}
              <span v-show="token.key_fns" class="badge bg-primary">fns</span>
            </td>
            <td>
              {{token.company_name}}
            </td>
            <td>
              <span v-for="(user, index) in token.user">
                {{user}}
                <span v-if="index < token.user.length - 1">, </span>
              </span>
            </td>
            <td>{{friendlyTime(token.date_end)}}</td>
            <td>
              <progress-line v-bind:dateEnd="token.date_end"></progress-line>
<!--              <div class="progress" role="progressbar" aria-label="Success example"-->
<!--                   :aria-valuenow="percentDaysLeft(daysLeft(token.date_end))"-->
<!--                   aria-valuemin="0" aria-valuemax="100">-->
<!--                <div class="progress-bar progress-bar-striped bg-success"-->
<!--                     :style="'width: ' + percentDaysLeft(daysLeft(token.date_end)) + '%'"></div>-->
<!--              </div>-->
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <p class="text-white ps-2 mb-0">1 to 10 of 47 entries</p>
      <div class="btn-group btn-group-sm" role="group" aria-label="Pagination btn">
        <button type="button" class="btn btn-light"><i class="bi bi-arrow-left-short"></i></button>
        <button type="button" class="btn btn-light active">1</button>
        <button type="button" class="btn btn-light">2</button>
        <button type="button" class="btn btn-light">3</button>
        <button type="button" class="btn btn-light"><i class="bi bi-arrow-right-short"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProgressLine from "@/components/ProgressLine";
export default {
  name: "HomeTable",
  components: {ProgressLine},
  computed: {
    ...mapGetters([
      'TOKENS',
    ]),
  },
  methods: {
    friendlyTime(e) {
      let date = new Date(e)
      let options = {
        era: undefined,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: undefined,
        timezone: 'UTC',
        hour: undefined,
        minute: undefined,
        second: undefined
      };
      return date.toLocaleString("ru", options)
    },
    removeToken(id) {
      this.$store.dispatch('removeToken', id);
    }
  }
}
</script>

<style scoped>

</style>