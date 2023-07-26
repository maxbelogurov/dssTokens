<template>
  <div class="row">
    <div class="d-flex justify-content-between align-items-center mt-3 text-white">
      <div class="h5 mb-0 ps-2 h1 d-flex align-items-center">
        DSS Tokens
        <div v-show="TOKENS_LOADING" class="ms-2 spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="d-flex">
        <div class="me-2">
          <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modalAddToken">Add</button>
        </div>
        <div class="me-2">
          <button @click="reload" type="button" class="btn btn-warning btn-sm">Reload</button>
        </div>
        <div class="me-2">
          <button @click="exit" type="button" class="btn btn-dark btn-sm">Exit</button>
        </div>
      </div>
    </div>
    <my-add-token></my-add-token>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyAddToken from '@/components/ModalAddToken'
import router from "@/router";
export default {
  name: "Header",
  components: {MyAddToken},
  computed: {
    ...mapGetters([
        'TOKENS_LOADING'
    ]),
  },
  methods: {
    reload() {
      this.$store.dispatch('getTokens');
    },
    exit() {
      this.$store.dispatch('clearAuthToken');
      router.push('/signin')
    }
  },
}
</script>

<style scoped>

</style>