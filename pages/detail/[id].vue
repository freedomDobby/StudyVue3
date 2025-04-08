<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button @click="addToCart()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createCartItme, fetchProductById } from '@/api/index';
import { useCartStore } from '~/store/cart';

export default {
  data() {
    return {
      product: [],
      cartStore: useCartStore(),
    };
  },

  async created() {
    const id = this.$route.params.id;
    const response = await fetchProductById(id);
    this.product = response.data;
    console.log('product )))', this.product);
  },

  methods: {
    async addToCart() {
      try {
        const response = await createCartItme(this.product)
        console.log("addToCart-response )))", response.data)
        this.cartStore.addCartItem(this.product);
        this.$router.push('/cart');
      } catch (err) {
        if (err.code === "ERR_BAD_RESPONSE") {
          if (confirm("이미 장바구니에 해당 상품이 추가되었습니다.")) {
            this.$router.push('/cart');
          } else {
            // 사용자가 취소를 눌렀을 경우, 아무 작업도 하지 않음 (현재 페이지 유지)
          }
        }
      }
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
