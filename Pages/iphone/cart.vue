<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <!-- image -->
        <!-- <div><img :src=`/public/images/${item}.jpg` /></div> -->
        <!-- itemName -->
        <div>{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const cart = useCart()
</script>

<style></style>
