<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center">
      <div class="col-md-3">
        
        <form class="form-container shadow-lg p-3 mb-5 bg-body rounded">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" class="btn btn-primary">Login</button>
          <router-link class="btn btn-primary ms-2" to="/Signup">Sign Up</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"LoginView"
}
</script>

<style>

</style>