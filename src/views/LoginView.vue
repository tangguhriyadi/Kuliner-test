<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center">
      <h2 class="text text-center mt-4 ms-4">Let Us Know Who You Are</h2>
      <div class="col-md-3">
        <form
          class="form-container shadow-lg p-3 mb-5 bg-body rounded"
          @submit.prevent="login"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="fill.email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="fill.password"
            />
          </div>

          <button type="submit" class="btn btn-success">Login</button>
          <router-link class="btn btn-success ms-2" to="/Signup"
            >Sign Up</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginView",
  data() {
    return {
      users: "",
      fill: {},
    };
  },
  methods: {
    setData(data) {
      this.users = data;
      console.log(data)
    },
    login() {
      if (this.fill.email == this.users[0].email && this.fill.password == this.users[0].password) {
        this.$router.push({ path: "/" });
        this.$toast.success("success login", {
          type: "success",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      } else {
        this.$toast.error("invalid email/password", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("user")
      .then((response) => this.setData(response.data))
      .catch((err) => console.log(err));
  }
};
</script>

<style>
</style>