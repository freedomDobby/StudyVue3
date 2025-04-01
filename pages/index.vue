<template>
  <div class="app">
    <main>
      <SearchInput :searchKeyWord="searchKeyWord"></SearchInput>
      <ul>
        <li
          v-for="item in products"
          :key="item.id"
          class="item flex"
          @click="moveToDetailPage(item.id)"
        >
          <img class="product-image" :src="item.imageUrl" alt="" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from '~/components/ProductList.vue';
import SearchInput from '~/components/SearchInput.vue';

export default {
  components: { ProductList, SearchInput },

  data() {
    return {
      products: [],
    };
  },

  data() {
    return {
      searchKeyWord: '',
    };
  },

  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
  },

  async created() {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log('response:', response);
      this.products = response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  border: 1px solid red;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>