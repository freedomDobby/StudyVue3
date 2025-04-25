<template>
  <main class="user-layout bg-gray-500">
    <article class="side-bar">
      <p>Dashboard</p>
      <p>Setting</p>
    </article>
    <!-- here nuxt will replace page content -->
    <section>
      <slot></slot>
    </section>
  </main>
</template>

<script setup>
import '../assets/css/tailwind.css'
</script>

<style>
.side-bar {
  display: flex;
  flex-direction: column;
}

.user-layout {
  display: flex;
  border: 1px solid red;
}
</style>
