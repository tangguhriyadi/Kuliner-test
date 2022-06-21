<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center">
      <div class="col-md-3">
        
        <form class="form-container shadow-lg p-3 mb-5 bg-body rounded" @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="users.email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="users.password"
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
import axios from 'axios'
export default {
    name:"LoginView",
    data(){
        return{
            users:{}
        }
    },
    methods:{
        async login(){
            const response = await axios.post('login',this.users)
            console.log(response)
        }
    }
}
</script>

<style>

</style>