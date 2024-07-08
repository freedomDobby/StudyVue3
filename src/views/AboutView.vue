<template>
  <h2>About View</h2>
  <p>{{ $route.path }}</p>
  <button class="btn btn-primary" @click="$router.push('/')">
    홈으로 이동
  </button>
</template>

<script setup></script>

<style lang="scss" scoped></style>
