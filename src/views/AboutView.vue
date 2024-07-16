<template>
  <h2>About View</h2>
  <hr />
  <h2>Store</h2>
  <p>counter : {{ store.counter }}</p>
  <p>counter2 : {{ counter }}</p>
  <p>doubleCount : {{ store.doubleCount }}</p>
  <button class="btn btn-primary me-3" @click="increment()">++</button>
  <button class="btn btn-warning me-3" @click="store.descrement()">--</button>
  <button class="btn btn-danger me-3" @click="store.reset()">reset</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore(); // counter1
// 구조분해할당으로 값 가져오기(반응성 유지하며)
const { counter } = storeToRefs(store); //counter2
const { increment } = store;
</script>

<style lang="scss" scoped></style>
