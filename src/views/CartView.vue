<template>
  <div class="cart">
    <NavbarComp :updateCart="carts" />
    <div class="container">
      <!-- Breadcrumb -->
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
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <h2>Your <strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Picture</th>
                  <th scope="col">Item</th>
                  <th scope="col">Note</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + cart.products.gambar"
                      alt=""
                      class="img-fluid shadow"
                      width="200"
                    />
                  </td>
                  <td>{{ cart.products.name }}</td>
                  <td>{{ cart.note ? cart.note : "-" }}</td>
                  <td>{{ cart.totalItem }} Pcs</td>
                  <td>Rp.{{ cart.products.price }}</td>
                  <td>
                    <strong
                      >Rp.{{ cart.products.price * cart.totalItem }}</strong
                    >
                  </td>
                  <td class="text-danger">
                    <i
                      class="bi bi-trash"
                      @click="deleteItem(cart.id)"
                      style="cursor: pointer"
                    ></i>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">Total Amount :</td>

                  <td align="right">
                    <strong>Rp.{{ totalPrice }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form action="" class="mt-4" @submit.prevent>
            <div class="form-group">
              <label for="nama">Name :</label>
              <input
                type="text"
                class="form-control"
                id="nama"
                v-model="order.nama"
              />
            </div>
            <div class="form-group">
              <label for="noMeja">Table Number :</label>
              <input
                type="number"
                class="form-control"
                id="noMeja"
                v-model="order.noMeja"
              />
            </div>

            <button
              type="submit"
              class="btn btn-success mt-2 float-end"
              @click="checkout"
            >
              <i class="bi-cart"></i> Chekout
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "CartView",
  components: {
    NavbarComp,
  },
  data() {
    return {
      carts: [],
      order: {}
    };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    deleteItem(id) {
      axios
        .delete("http://localhost:3000/keranjang/" + id)
        .then(() => {
          this.$toast.error("Delete Success", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          /* update data realtime */
          axios
            .get("http://localhost:3000/keranjang/")
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout(){
      if(this.order.nama && this.order.noMeja){
        this.order.carts = this.carts
        axios
        .post('http://localhost:3000/pesanan', this.order)
        .then(() => {
          // delete cart
          this.carts.map((item) => {
            return axios
        .delete("http://localhost:3000/keranjang/" + item.id)
        .catch((error) => console.log(error));
          })
          this.$router.push({path:"/CompletedView"})
          this.$toast.success("Added to Cart", {
            type:"success",
            position:"top-right",
            duration:3000,
            dismissible:true
          })
        })
        .catch((err) => console.log(err))
      } else {
        this.$toast.error("Please Fill The Empty Field", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjang/")
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalPrice() {
      return this.carts.reduce((item, data) => {
        return item + data.products.price * data.totalItem;
      }, 0);
    },
  },
};
</script>

<style>
</style>