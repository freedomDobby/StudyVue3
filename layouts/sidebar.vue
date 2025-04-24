<template>
  <main class="user-layout">
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

<script setup></script>

<style>
.side-bar {
  display: flex;
  flex-direction: column;
}

.user-layout {
  display: flex;
}
</style>
