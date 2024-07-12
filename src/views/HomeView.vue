<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner justify-content-center main-container">
      <div class="carousel-item active">
        <img src="../assest/surface.jpg" class="d-block w-100" alt="Img1" />
      </div>
      <div class="carousel-item">
        <img src="../assest/surface_02.jpg" class="d-block w-100" alt="Img2" />
      </div>
      <div class="carousel-item">
        <img src="../assest/waves.jpg" class="d-block w-100" alt="Img3" />
      </div>
    </div>
  </div>
  <hr class="my-4" />
</template>

<script setup></script>
<style scoped>
.main-container {
  width: 100%;
}
</style>
