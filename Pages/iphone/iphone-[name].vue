<template>
  <div>
    <Head>
      <Title>Nust 3 - Iphone{{ name.replaceAll('-', ' ') }}</Title>
    </Head>
    <div class="main-box" style="margin-top: 5%">
      <!-- Phone Image -->
      <div>
        <img
          width="300"
          :src="`/images/iphone${route.params.name}.jpg`"
          :alt="`/images/iphone${route.params.name}.jpg`"
        />
      </div>
      <!-- Info -->
      <div class="main-box" style="flex-direction: column">
        <div>iphone {{ name }}</div>
        <div class="cart-btn">Cart</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const name = computed(() => {
  return route.params.name.replaceAll('-', ' ')
})

// useHead({
//   title: `Nuxt3 - Iphone${route.params.name.replaceAll('-', ' ')}`,
// })
</script>

<style>
.main-box {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
}

.cart-btn {
  background-color: rgb(43, 230, 43);
  line-height: 50px;
  display: flex;
  justify-content: center;
  font-size: larger;
  font-weight: bolder;
  width: 250px;
  height: 50px;
  margin-top: 10%;
}
</style>
