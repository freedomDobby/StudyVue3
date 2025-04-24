<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="profile">profile</NuxtLink>
    </nav>
    <!-- Here nuxt will replace page content -->
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
