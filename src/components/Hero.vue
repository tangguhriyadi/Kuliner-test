<template>
  <div class="hero">
    <!-- desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-2">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu, </strong> <br />
                in Your Gadget
                <p>Choose your favorite food !</p>
                <button class="btn btn-lg btn-success">
                  <i class="bi bi-arrow-right"></i> Order Here
                </button>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            class="mainpic"
            src="../assets/images/main.png"
            alt="gambar"
            width="500"
          />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-2">
        <div class="col-md-6">
          <img
            class="mainpic"
            src="../assets/images/main.png"
            alt="gambar"
            width="500"
          />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu, </strong> <br />
                in Your Gadget
                <p>Choose your favorite food !</p>
                <button class="btn btn-lg btn-success">
                  <i class="bi bi-arrow-right"></i> Order Here
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComp",
};
</script>

<style>
</style>