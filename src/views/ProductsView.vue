<script>
import ProductCard from '../components/ProductCard.vue'
const baseURL = "https://api.escuelajs.co/api/v1"

export default {
  data() {
    return {
      products: null
    }
  },
  mounted() {
    this.importProducts().then((data) => {
      this.products = data;
    });
  },
  components: {
    ProductCard
  },
  methods: {
    async importProducts() {
      let apiResponse = fetch(`${baseURL}/products/`).then(res => res.json());

      return apiResponse;
    }
  }
}
</script>

<template>
  <main>
    <h1>Products</h1>
    <div class="products">
      <template v-if="products" v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </template>
    </div>
  </main>
</template>

<style>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>