<template>
  <div>
    <nav class="bg-green-500 shadow-lg text-white text-lg flex justify-around">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="/iphone">Iphones</NuxtLink>
      <NuxtLink to="profile">profile</NuxtLink>
    </nav>
    <!-- Here nuxt will replace page content -->
    <slot></slot>
  </div>
</template>

<script>
import '../assets/css/tailwind.css'
</script>

<style></style>
