<script>
import { RouterLink, RouterView } from 'vue-router';
import {getItemsInCart} from "./functions/CartStorageManagment.js";

export default {
  data() {
    return {
      cartItemsCount: 0
    }
  },
  mounted() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      this.cartItemsCount = cartItems.length;
    }
  },
  methods: {
    updateCartItemCount(){
      this.cartItemsCount = getItemsInCart().length;
    }
  }
}
</script>

<template>
  <header>
    <div class="limiter">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <nav>
        <RouterLink to="/">Shop</RouterLink>
        <RouterLink to="/shopping-cart" class="shopping-cart" ref="hola">
          <i class="bi bi-cart4" style="padding-right: 3px;"></i>
          Cart {{ cartItemsCount === 0 ? "" : `(${cartItemsCount})` }}
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView @updateCartItemCount="updateCartItemCount"/>
</template>

<style scoped>
header {
  background: white;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #0003;

  position: sticky;
  top: 0;
  z-index: 100;
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

nav .shopping-cart {
  padding: 3px 15px;
  border-radius: 5px;
  background-color: #00bd7e;
  color: white;
}

nav .shopping-cart:hover {
  background-color: #31d8a0;
}
</style>
