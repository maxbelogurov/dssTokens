<template>
  <div class="modal fade" id="modalAddToken" tabindex="-1" aria-labelledby="modalAddTokenLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalAddTokenLabel">Add token</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="mb-3 col-6">
              <label for="tokenId" class="form-label small">Token id</label>
              <input v-model="token.key_id" type="text" class="form-control form-control-sm" id="tokenId">
            </div>
            <div class="mb-3 col-6">
              <label for="tokenDescription" class="form-label small">Description</label>
              <input v-model="token.description" type="text" class="form-control form-control-sm" id="tokenDescription">
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-6">
              <label for="tokenCompany" class="form-label small">Company</label>
              <input v-model="token.company_name" type="text" class="form-control form-control-sm" id="tokenCompany">
            </div>
            <div class="mb-3 col-6">
              <label for="tokenCompanyManager" class="form-label small">Manager</label>
              <input v-model="token.company_user" type="text" class="form-control form-control-sm" id="tokenCompanyManager">
            </div>
          </div>
          <div class="mb-3">
            <label for="tokenUser1" class="form-label small">Users</label>
            <button @click="this.usersCount++" type="button" class="btn btn-sm btn-info ms-2 px-1" style="line-height: 0.8em">add</button>
            <button v-if="this.usersCount > 1" @click="this.usersCount--" type="button" class="btn btn-sm btn-warning ms-2 px-1" style="line-height: 0.8em">remove</button>
            <div class="d-flex gap-1">
              <div v-for="inputUser in usersCount" class="position-relative">
                <input v-model="token.user[inputUser - 1]" type="text" class="form-control form-control-sm" :id="`tokenUser${inputUser}`" placeholder="User">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="mb-3 col-6">
              <DatePicker v-model="token.date_start" :timezone="timezone" :attributes="attr">
                <template #default="{ inputValue, inputEvents }">
                  <label for="tokenDateStart" class="form-label small">Date start</label>
                  <input class="form-control form-control-sm" id="tokenDateStart" :value="inputValue" v-on="inputEvents" />
                </template>
              </DatePicker>
            </div>
            <div class="mb-3 col-6">
              <DatePicker v-model="token.date_end" :timezone="timezone" :attributes="attr">
                <template #default="{ inputValue, inputEvents }">
                  <label for="tokenDateEnd" class="form-label small">Date end</label>
                  <input class="form-control form-control-sm" id="tokenDateEnd" :value="inputValue" v-on="inputEvents" />
                </template>
              </DatePicker>
            </div>
          </div>
          <div class="form-check form-switch mb-3">
            <input v-model="token.key_fns" class="form-check-input" type="checkbox" role="switch" id="tokenFNS" checked>
            <label class="form-check-label" for="tokenActive">Published FNS</label>
          </div>
          <div class="form-check form-switch">
            <input v-model="token.archived" v-bind:true-value="false" v-bind:false-value="true" class="form-check-input" type="checkbox" role="switch" id="tokenActive" checked>
            <label class="form-check-label" for="tokenActive">Active</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="addToken" type="button" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';
export default {
  name: "ModalAddToken",
  components: { Calendar, DatePicker },
  data() {
    return {
      timezone: ref('UTC'),
      attr: [{
        highlight: 'gray',
        dates: new Date(),
      }],
      usersCount: 1,
      token: {
        key_id: '',
        company_name: '',
        company_user: '',
        user: [],
        date_start: null,
        date_end: null,
        description: '',
        key_fns: true,
        archived: false,
        settings: {}
      },
    }
  },
  computed: {

  },
  methods: {
    addToken() {
      let data = {}
      Object.assign(data, this.token)
      data.date_start = this.token.date_start.toISOString().slice(0, 10)
      data.date_end = this.token.date_end.toISOString().slice(0, 10)
      let store = this.$store
      let clearToken = this.clearToken()
      async function addingToken() {
        const response = await store.dispatch('addToken', data)
        response ? clearToken : console.log(response)
      }
      addingToken()
    },
    addUser() {
      this.usersCount++
    },
    clearToken() {
      let token = {
        key_id: '',
        company_name: '',
        company_user: '',
        user: [],
        date_start: null,
        date_end: null,
        description: '',
        key_fns: true,
        archived: false,
        settings: {}
      };
      this.token = token
    }
  },
  created() {
    // this.token.date_start = ref(new Date())
  }
}
</script>

<style scoped>

</style>