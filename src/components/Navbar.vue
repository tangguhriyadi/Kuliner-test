<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">The Kuliner</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/FoodsView">Foods</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/CartView"
              >Cart <i class="bi bi-bag"></i>
              <span class="badge bg-success ms-2">{{
                updateCart ? updateCart.length : totalItem.length
              }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavbarComp",
  data() {
    return {
      totalItem: [],
    };
  },
  props: ["updateCart"],
  methods: {
    setTotalItem(data) {
      this.totalItem = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjang/")
      .then((response) => this.setTotalItem(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>