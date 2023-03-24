<script>
const baseURL = "https://api.escuelajs.co/api/v1";

export default {
    data() {
        return {
            categories: null,
            minPrice: 0,
            maxPrice: 0,
            selectedCategory: 0
        }
    },
    mounted() {
        fetch(`${baseURL}/categories/`).then(res => res.json()).then(data => {
            this.categories = data;
        })
    },
    watch: {
        minPrice(newMinPrice, oldMinPrice){
            if(newMinPrice > this.maxPrice){
                this.minPrice = this.maxPrice
            }
        },
        maxPrice(newMaxPrice, oldMaxPrice){
            if(newMaxPrice < this.minPrice){
                this.maxPrice = this.minPrice
            }
        }
    }
}

</script>

<template>
    <div class="filters-menu">
        <h2>Filters</h2>
        <h4>Price range</h4>
        <div class="price-range">
            <input type="number" min="0" placeholder="Min..." v-model="minPrice">
            -
            <input type="number" min="0" placeholder="Max..." v-model="maxPrice">
        </div>
        <h4>Categories</h4>
        <div class="categories" v-if="categories">
            <div>
                <input type="radio" name="categories" id="0" value="0" v-model="selectedCategory">
                <label for="0">Todos</label>
            </div>
            <div v-for="category in categories">
                <input type="radio" name="categories" :id="category.id" :value="category.id" v-model="selectedCategory">
                <label :for="category.id">{{ category.name }}</label>
            </div>
        </div>
        <button class="button btn-primary" @click="$parent.doFilter">Aplicar</button>
    </div>
</template>

<style>
.price-range {
    display: flex;
    justify-content: space-between
}

.price-range input {
    width: 45%;
    border: 1px solid #0002;
    padding: 0px 5px;
}

.price-range input:focus {
    outline-color: #0004;
}

.filters-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.filters-menu h4:not(:first-of-type) {
    margin-top: 15px;
}

.filters-menu .categories div {
    display: block;
}

.filters-menu .categories label {
    padding-left: 5px;
}

.filters-menu .button {
    margin-top: 15px;
}
</style>