<template>
  <div>
    <input type="text" :value="searchKeyWord" />
    <button>search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyWord: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style  scoped>
</style>