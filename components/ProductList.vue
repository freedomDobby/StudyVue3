<template>
  <div>
{{ product }}
  </div>
</template>

<script >
import axios from 'axios'

export default {
  data() {
    return {
      
    ProductListproducts: [],
    }
  },

  async fetch() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    this.products = response.data
  },

   created() {},
}
</script>

<style >

</style>