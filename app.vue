<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="custom-box">
      <button @click="toggle">Toggle</button>
      <p>{{ checking }}</p>
    </div>
    <div class="custom-box" style="justify-content: center">
      <!-- Toggle 버전 -->
      <div class="custom-window">
        <component :is="myComponent" />
      </div>
      <!-- aTag버전 -->
      <div class="custom-window">
        <a href="#" class="custom-a" @click="view('home')">HomeWelcom</a>
        <a href="#" class="custom-a" @click="view('counter')">Counter</a>
        {{ page }}
        <LazyHomeWelcom v-if="page === 'home'" />
        <LazyCounter v-else />
      </div>
      <!-- Nuxt Page -->
    </div>
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>

<script setup>
const checking = ref(false)
const myComponent = shallowRef()

function toggle() {
  checking.value = !checking.value
  myComponent.value
}

watch(checking, (newChecking) => {
  newChecking
    ? (myComponent.value = resolveComponent('HomeWelcom'))
    : (myComponent.value = resolveComponent('Counter'))
})

const page = ref('home')
function view(name) {
  page.value = name
}
</script>

<style>
.custom-box {
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px dotted blue;
  gap: 2px;
}

.custom-a {
  border: 1px solid green;
  cursor: pointer;
}

.custom-window {
  border: 2px solid black;
  width: 45%;
}
</style>
