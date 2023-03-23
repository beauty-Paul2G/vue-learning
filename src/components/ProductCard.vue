<script>
import ProductModal from "../components/ProductModal.vue"

export default {
    data(){
        return {
            isModalOpen: false
        }
    },
    props: {
        product: Object
    },
    methods: {
        toggleModal(){
            this.isModalOpen = !this.isModalOpen ;
        }
    },
    components: {
        ProductModal
    }
}
</script>

<template>
    <div class="product-card" @click="toggleModal()">
        <img :src="product.images[0]" alt="">
        <h3>{{ product.title }}</h3>
        <span>${{ product.price }}</span>
    </div>
    <ProductModal v-if="isModalOpen" :product="product" :toggleModal="toggleModal"/>

</template>

<style scoped>
.product-card {
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 200px;

    border: 1px solid #0002;
    border-radius: 5px;

    transition: all ease 250ms;
}

.product-card:hover {
    box-shadow: 1px 1px 5px #0003;
}

.product-card img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    pointer-events: none;
}

.product-card h3 {
    text-align: center;
}
</style>