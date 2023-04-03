<script>
import ProductCard from '../components/ProductCard.vue';
import FiltersMenu from '../components/FiltersMenu.vue'
import LoadingIcon from '../components/icons/LoadingIcon.vue';

const baseURL = "https://api.escuelajs.co/api/v1";

export default {
  data() {
    return {
      products: null,
      searchTerm: "",
      searchResults: null
    }
  },
  mounted() {
    fetch(`${baseURL}/products/`).then(res => res.json()).then(data => {
      this.products = data;
    });
  },
  components: {
    ProductCard,
    FiltersMenu,
    LoadingIcon
  },
  methods: {
    doSearch() {
      if (this.wannaSearch) {
        this.searchResults = this.products.filter(product =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    },
    doFilter() {
      let minPrice = this.$refs.filtersMenu.minPrice;
      let maxPrice = this.$refs.filtersMenu.maxPrice;
      const category = parseInt(this.$refs.filtersMenu.selectedCategory);

      minPrice = minPrice ? minPrice : 0;
      maxPrice = maxPrice ? maxPrice : 99999;

      this.products = null;
      fetch(`${baseURL}/products/`).then(res => res.json()).then(data => {
        this.products = data.filter(product =>
          (product.price <= maxPrice && product.price >= minPrice) &&
          (category === 0 ? true : product.category.id === category)
        );
      });
    }
  },
  computed: {
    wannaSearch() {
      return this.searchTerm.length > 0;
    },
    searchCount() {
      return this.searchResults.length
    }
  }
}
</script>

<template>
  <main class="products-view">
    <div class="title">
      <h1>Products</h1>
      <input type="text" placeholder="Buscar..." @input="doSearch" v-model="searchTerm">
    </div>
    <div class="content">
      <aside>
        <FiltersMenu ref="filtersMenu" />
      </aside>
      <section>
        <span class="results-message" v-if="wannaSearch">
          {{ searchCount }} search results for "{{ searchTerm }}":
        </span>
        <div class="products">
          <template v-if="products">
            <template v-for="product in (!wannaSearch ? products : searchResults)" :key="product.id">
              <ProductCard :product="product" />
            </template>
            <h3 v-if="products && products.length === 0">There are no coincidences for those filters.</h3>
          </template>
          <LoadingIcon v-else />
        </div>
      </section>
    </div>
  </main>
</template>

<style>
.products-view>.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.products-view .title input {
  padding: 10px;
  font-size: 15px;
  border: 1px solid #0002;
  border-radius: 5px;
}

.products-view .title input:focus {
  outline-color: var(--primary-color);
}

.products-view .content {
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
}

.products-view aside {
  width: 20%;
  border: 1px solid #0002;
  border-radius: 5px;
  padding: 20px 20px;
  margin-right: 10px;
}

.products-view section {
  width: 80%;
}

.products-view .results-message {
  height: 0px;
  overflow: overflow;
}

.products-view .products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>