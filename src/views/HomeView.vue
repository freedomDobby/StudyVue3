<template>
  <h2>Home View</h2>
  <p>{{ $route }}</p>
  <p>{{ $route.name }}</p>
  <button class="btn btn-primary" @click="goAboutPage">About으로</button>
  <hr class="my-4" />
  <AppGrid :items="items" v-slot="{ item }" colClass="col-6">
    <AppCard>{{ item }}</AppCard>
  </AppGrid>
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
