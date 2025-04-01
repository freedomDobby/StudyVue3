<template>
  <div>
    <header>
      <NuxtLink to="/">
        <h1>Nuxt Shopping</h1>
      </NuxtLink>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  create() {
    console.log(this.$route);
  },
};
</script>
