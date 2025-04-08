import { fetchCartItems } from '~/api';

// store/index.js
export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem);
  },
};

export const actions = {
  async FETCH_CART_ITEMS({ commit }) {
    const response = await fetchCartItems();
    console.log('FETCH_CART_ITEMS: ', response);
  },
};
