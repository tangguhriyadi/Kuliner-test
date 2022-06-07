<template>
  <div>
    <NavbarComp />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Food List</h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Find Your Food"
              aria-label="Find Your Food"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from "@/components/Navbar.vue";
import FooterComp from "@/components/Footer.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "FoodsView",
  components: {
    NavbarComp,
    FooterComp,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search:""
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood(){
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>