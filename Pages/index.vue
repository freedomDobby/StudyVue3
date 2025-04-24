<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="about">About</NuxtLink>
    <button @click="moveToAbout">Go About</button>
    Hello Index
  </div>
</template>

<script setup>
function moveToAbout() {
  navigateTo('about')
}
</script>

<style lang="scss" scoped></style>
