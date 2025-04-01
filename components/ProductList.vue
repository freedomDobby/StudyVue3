<template>
  <div style="border: 2px dotted blue">
    {{ products }}
  </div>
</template>

<script >
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {},

  async fetch() {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log('ProductList_fetch:', response);
      this.products = response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  created() {},
};
</script>

<style >
</style>