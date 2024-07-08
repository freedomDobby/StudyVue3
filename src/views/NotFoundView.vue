<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <div class="text-muted">요청한 페이지로 이동 불가능합니다.</div>
    <div class="mt-4">
      <RouterLink to="/">
        <button class="btn btn-primary">Home</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
