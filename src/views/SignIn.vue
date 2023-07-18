<template>
  <div class="container-fluid bg-secondary bg-gradient min-vh-100">
    <div class="row d-flex justify-content-center align-items-center min-vh-100">
      <div class="col-lg-4 col-md-7">
        <div class="card">
          <div class="card-body px-md-5">
            <h5 class="card-title text-center mt-2 mb-3">Sign in</h5>
            <form>
              <div class="mb-3">
                <input v-model="login" type="email" class="form-control" id="dssEmail" placeholder="Email"
                       aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <input v-model="password" type="password" class="form-control" id="dssPassword" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingIn",
  data() {
    return {
      login: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>