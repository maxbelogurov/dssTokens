<template>
  <div class="row">
    <div class="d-flex justify-content-between align-items-center mt-3 text-white">
      <h1 class="h5 mb-0 ps-2">
        DSS Tokens
      </h1>
      <div class="d-flex ">
        <div class="me-2">
          <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalAddToken">Add</button>
        </div>
        <div class="btn-group btn-group-sm" role="group" aria-label="FormatData">
          <button @click="changeTemplate('table')"
                  :class="HOME_TEMPLATE === 'table' ? 'active' : ''"
                  type="button" class="btn btn-light">Table</button>
          <button @click="changeTemplate('calendar')"
                  :class="HOME_TEMPLATE === 'calendar' ? 'active' : ''"
                  type="button" class="btn btn-light">Calendar</button>
        </div>
      </div>
    </div>
    <my-add-token></my-add-token>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyAddToken from '@/components/ModalAddToken'
export default {
  name: "Header",
  components: {MyAddToken},
  computed: {
    ...mapGetters([
      'HOME_TEMPLATE',
    ]),
  },
  methods: {
    changeTemplate(value) {
      this.$store.dispatch('changeTemplate', value)
    }
  },
}
</script>

<style scoped>

</style>