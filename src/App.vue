<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="limiter">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <nav>
        <RouterLink to="/">Shop</RouterLink>
        <RouterLink to="/shopping-cart">Shopping Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #0003;
}

.limiter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1400px;
}

.logo {
  width: 80px;
}

nav {
  display: flex;
  align-content: center;
  gap: 1rem;
}

main {
  width: 100%;
  padding: 1rem 2rem;
  max-width: 1400px;
}
</style>
