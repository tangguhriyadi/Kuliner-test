<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <div class="row bg-light mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-2">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/FoodsView" class="text-dark"
                  >Foods</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            alt=""
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.name }}</strong>
          </h2>
          <h4>
            Price : <strong>Rp.{{ product.price }}</strong>
          </h4>
          <form action="" class="mt-4" @submit.prevent>
            <div class="form-group">
              <label for="totalItem">Total Item:</label>
              <input
                type="number"
                class="form-control"
                id="totalItem"
                v-model="order.totalItem"
              />
            </div>
            <div class="form-group">
              <label for="note">Note:</label>
              <textarea
                class="form-control"
                placeholder="ex: spicy, additional spoon, extra onion"
                name=""
                id="note"
                v-model="order.note"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-success mt-2"
              @click="setOrder"
            >
              <i class="bi-cart"></i> Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <FooterComp />
</template>

<script>
import FooterComp from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "FoodDetail",
  components: {
    FooterComp,
    Navbar,
  },
  data() {
    return {
      product: {},
      order: {}
    }
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    setOrder() {
      if(this.order.totalItem){
      this.order.products = this.product;
      axios
        .post('http://localhost:3000/keranjang', this.order)
        .then(() => {
          this.$router.push({ path: "/CartView" })
          this.$toast.success("Chekout Completed", {
            type:"success",
            position:"top-right",
            duration:3000,
            dismissible:true
          })
        })
        .catch((err) => console.log(err))
      }else {
        this.$toast.error("Please fill the total Item", {
            type:"error",
            position:"top-right",
            duration:3000,
            dismissible:true
          })
      }
      
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>