<template>
  <div class="card shadow card-product" style="width: 18rem;">
  <img :src="'assets/images/' + product.gambar " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">Harga: Rp.{{product.price}}</p>
    <a href="#" class="btn btn-success"><i class="bi-cart"></i> Detail</a>
  </div>
</div>
  
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>