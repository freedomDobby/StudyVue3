<template>
  <div>
    <div style="border: 1px solid red">
      {{ products }}
    </div>
    <ProductList/>
  </div>
</template>

<script>
import axios from 'axios'
import ProductList from '~/components/ProductList.vue'

export default {
components:{ProductList},

  data() {
    return {
      
    ProductListproducts: [],
    }
  },

  async fetch() {
    const response = await axios.get('http://localhost:3000/products')
    console.log("response ))))", response)
    this.products = response.data
  },

   created() {},
}
</script>

<style></style>
