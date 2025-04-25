<template>
  <div>
    <Head>
      <Title>Nust 3 - Iphone{{ name.replaceAll('-', ' ') }}</Title>
    </Head>
    <p>iphone {{ name }}</p>
  </div>
</template>

<script setup>
const route = useRoute()

const name = computed(() => {
  return route.params.name.replaceAll('-', ' ')
})

// useHead({
//   title: `Nuxt3 - Iphone${route.params.name.replaceAll('-', ' ')}`,
// })
</script>

<style lang="scss" scoped></style>
