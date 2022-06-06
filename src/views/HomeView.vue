<template>
  <div class="home">
    <NavbarComp />
    <div class="container">
      <HeroComp />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComp from "@/components/Navbar.vue";
import HeroComp from "@/components/Hero.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComp,
    HeroComp,
  },
};
</script>
