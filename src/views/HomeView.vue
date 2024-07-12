<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
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
  <button class="btn btn-primary mt-4" @click="goAboutPage">About으로</button>
  <hr class="my-4" />
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject, ref } from "vue";

const router = useRouter();
const goAboutPage = () => {
  router.push("/about");
};

const items = ref(["사과", "망고", "참외", "수박", "자몽", "바나나"]);
</script>

<style lang="scss" scoped></style>
