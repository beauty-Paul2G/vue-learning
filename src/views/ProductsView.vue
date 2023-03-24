<script>
import ProductCard from '../components/ProductCard.vue';
import FiltersMenu from '../components/FiltersMenu.vue'
import LoadingIcon from '../components/icons/LoadingIcon.vue';
const baseURL = "https://api.escuelajs.co/api/v1";
const baseURLQuery = "https://api.escuelajs.co";

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
      this.products = data.slice(0, 150);
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
        this.searchResults = this.products.filter(product => product.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
    },
    doFilter() {
      const minPrice = this.$refs.filtersMenu.minPrice;
      const maxPrice = this.$refs.filtersMenu.maxPrice;
      const data = {
        "query": `query { products(price_min: ${minPrice}, price_max: ${maxPrice}) {id title price description images} }`
      }

      fetch(`${baseURLQuery}/graphql/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        this.products = data.data.products;
        console.log(this.products)
      })
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
        <span class="results-message" v-if="wannaSearch">{{ searchCount }} resultados de búsqueda para "{{ searchTerm }}":
        </span>
        <div class="products">
          <template v-if="products" v-for="product in (!wannaSearch ? products : searchResults)" :key="product.id">
            <ProductCard :product="product" />
          </template>
          <LoadingIcon v-else />
        </div>
      </section>
    </div>
  </main>
</template>

<style>
.products-view .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.products-view .title input {
  padding: 10px;
  font-size: 15px;
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