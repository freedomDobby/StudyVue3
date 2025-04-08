import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  // state
  const cartItems = ref([]);

  function addCartItem(cartItem) {
    if (!cartItems.value.some((item) => item.id === cartItem.id)) {
      cartItems.value.push(cartItem);
    }
  }

  return {
    cartItems,
    addCartItem,
  };
});
