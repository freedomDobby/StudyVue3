<template>
  <div>
    <header>
        <AppHeader />
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
