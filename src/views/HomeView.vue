<template>
  <div class="home">
    <NavbarComp />
    <div class="container">
      <HeroComp />
      <div class="row mt-4">
        <div class="col">
          <h2>Recommended <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/FoodsView" class="btn btn-success float-end"
            ><i class="bi bi-eye"></i> See All</router-link
          >
        </div>
      </div>
      <div class="row mb-4">
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
  <FooterView />
</template>

<script>
// @ is an alias to /src
import NavbarComp from "@/components/Navbar.vue";
import HeroComp from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import FooterView from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    HeroComp,
    CardProduct,
    FooterView,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-product")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
