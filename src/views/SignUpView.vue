<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center">
      <div class="col-md-3">
        
        <form action="" class="form-container shadow-lg p-3 mb-5 bg-body rounded" @submit.prevent="signup">
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
              v-model="user.email"
              required
            />
            <div id="emailHelp" class="form-text">
              Enter your valid email.
            </div>
          </div>
          <div class="mb-3">
            <label for="InputUsername" class="form-label"
              >Username</label
            >
            <input
              type="text"
              class="form-control"
              id="InputUsername"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="user.username"
              required
            />
            
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              v-model="user.password"
              required
            />
          </div>
          <div class="mb-3">
            <label for="ConfirmPassword" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="ConfirmPassword"
              v-model="user.confirmPassword"
              required
            />
          </div>
          
          <button type="submit" class="btn btn-primary">Signup</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'SignUpView',
    methods:{
        async signup(){
           await axios.post('register', this.user)
            /* console.log(response) */
            this.$router.push('/Login')
        }
    },
    data(){
        return{
            user:{}
        }
    },
}
</script>

