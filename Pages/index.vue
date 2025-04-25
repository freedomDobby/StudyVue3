<template>
  <div>
    <button @click="moveToAbout">Go About</button>
    Hello Index
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'sidebar',
})

function moveToAbout() {
  navigateTo('about')
}
</script>

<style lang="scss" scoped></style>
