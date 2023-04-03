<script>
import { RouterLink, RouterView } from 'vue-router';
import LoginModal from "./components/LoginModal.vue"
import {getItemsInCart} from "./functions/CartStorageManagment.js";

export default {
  data() {
    return {
      cartItemsCount: 0,
      isLoginModalOpen: false
    }
  },
  mounted() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      this.cartItemsCount = cartItems.length;
    }
  },
  components: {
    LoginModal
  },
  methods: {
    updateCartItemCount(){
      this.cartItemsCount = getItemsInCart().length;
    },
    toggleModal(){
      this.isLoginModalOpen = !this.isLoginModalOpen
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
        <button class="login-button" @click="toggleModal()">
          <i class="bi bi-box-arrow-in-right" style="padding-right: 3px;"></i>
        </button>
      </nav>
    </div>
  </header>
  <LoginModal v-if="isLoginModalOpen"/>
  <RouterView />
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
  background-color: var(--primary-color);
  color: white;
}

nav .shopping-cart:hover {
  background-color: #31d8a0;
}

.login-button {
  cursor: pointer;
  padding: 5px;
  border: 1px solid transparent;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-size: 15px;
  transition: 250ms all ease;
}
.login-button:hover {
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
}
</style>
