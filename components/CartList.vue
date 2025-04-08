<template>
  <div>
    <ul>
      <div
        v-for="(cartItem, index) in cartStore.cartItems"
        :key="index"
        class="cart-list"
      >
        <input
          v-model="checkboxList"
          :value="cartItem.id"
          type="checkbox"
        />
        <div
          class="cart-list clickable"
          @click="moveToDetailPage(cartItem.id)"
        >
          <img
            class="product-image"
            :src="cartItem.imageUrl"
            :alt="cartItem.name"
          />
          {{ cartItem.name }} - {{ cartItem.price }}원
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref,  } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '~/store/cart';
import { fetchCartItems } from '~/api';

const cartStore = useCartStore();
const router = useRouter();
const checkboxList = ref([]);

// 페이지 진입 시 장바구니 데이터 불러오기
watchEffect(async () => {
  const response = await fetchCartItems();
  cartStore.cartItems = response.data;
});

// fetch(async () => {
//   const response = await fetchCartItems();
//   cartStore.cartItems = response.data;
// });

// 상세 페이지 이동
const moveToDetailPage = (id) => {
  router.push(`/detail/${id}`);
};
</script>


<style scoped >
.clickable{
  cursor: pointer;
  width: 100%;
}

.cart-list{
  /* border: 1px solid red; */
  margin-left:3% ;
  margin-top:1% ;
  display: flex;
  justify-content: start;
  align-items: center; 
  gap:1%;
}

.product-image {
  width: 150px;
  height: 150px;
}

.btn-box{
  /* border: 1px solid green; */
  width: 90%;
  position: sticky;
  float: right;
  bottom: 50px;
  display: flex;
  justify-content: end;
  align-items: center; 
  gap:2%
}
</style>
