<template>
  <div class="container-fluid bg-secondary bg-gradient min-vh-100">
    <div class="row d-flex justify-content-center align-items-center min-vh-100">
      <div class="col-lg-4 col-md-7">
        <div class="card">
          <div class="card-body px-md-5">
            <h5 class="card-title text-center mt-2 mb-3">Sign in</h5>
              <div class="mb-3">
                <input v-model.trim="login" type="text" class="form-control" id="dssEmail" placeholder="login"
                       :class="v$.login.$error ? 'border-danger' : ''">
              </div>
              <div class="mb-3">
                <input v-model.trimn="token" type="password" class="form-control" id="dssToken" placeholder="Token"
                       :class="v$.token.$error ? 'border-danger' : ''">
              </div>
              <button class="btn btn-dark" @click="setToken"
                      :class="v$.$invalid ? 'disabled': ''">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import router from "@/router";
export default {
  name: "SingIn",
  setup () {
    return { v$: useVuelidate({ $autoDirty: true}) }
  },
  data() {
    return {
      login: '',
      token: ''
    }
  },
  validations() {
    return {
      login: { required },
      token: { required },
    }
  },
  methods: {
    setToken() {
      let token = this.login + ' ' + this.token
      this.$store.dispatch('writeAuthToken', token)
      router.push('/');
    }
  },
  created() {
    this.$store.dispatch('checkAuthToken')
  }
}
</script>

<style scoped>

</style>