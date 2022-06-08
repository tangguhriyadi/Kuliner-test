<template>
  <div class="container success">
    <NavbarComp />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col text-center">
          <img src="../assets/images/cook.png" alt="" width="300" />
          <h2><strong>Checkout Completed !</strong></h2>
          <h4>We Are Preparing Your Food !</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/Navbar.vue";
export default {
  name: "CompletedView",
  components: {
    NavbarComp,
  },
};
</script>

<style>
</style>