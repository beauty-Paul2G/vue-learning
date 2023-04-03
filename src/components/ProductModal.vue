<script>
import Modal from "./Modal.vue";
import Toast from "./Toast.vue";
import { saveSingleItemToCart, someItemInCart, addQtyToItemInCart } from "../functions/CartStorageManagment.js"

export default {
    data() {
        return {
            product: this.$parent.product,
            qty: 1,
            toastDisplayed: []
        }
    },
    components: {
        Modal,
        Toast
    },
    methods: {
        saveToCart() {
            if (!someItemInCart(this.product.id)) {
                saveSingleItemToCart(this.product, this.qty);
            } else {
                addQtyToItemInCart(this.product.id, this.qty)
            }
            this.$root.updateCartItemCount();

            this.toastDisplayed.push(true);
            setTimeout(() => { this.toastDisplayed.shift() }, 2000);
        }
    }
}
</script>

<template>
    <Modal>
        <div class="product-modal-content">
            <img :src="product.images[0]">
            <h2>{{ product.title }}</h2>
            <h3>${{ product.price }}</h3>
            <p>{{ product.description }}</p>
            <div class="buttons">
                <span>Quantity: </span>
                <input type="number" class="spinner" min="1" v-model="qty">
                <button class="button btn-primary" @click="saveToCart">
                    <i class="bi-cart4" /> Add
                </button>
            </div>
        </div>
    </Modal>
    <TransitionGroup name="entrance" tag="ul" class="toast-list">
        <li v-for="toast in toastDisplayed" :key="toast">
            <Toast >{{ "Item added to cart" }}</Toast>
        </li>
    </TransitionGroup>
</template>

<style>
.product-modal-content .buttons {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    width: 100%;
    gap: 5px;
    margin-top: 20px;
}

.product-modal-content .spinner {
    width: 100px;
}

.entrance-move,
.entrance-enter-active,
.entrance-leave-active  {
    transition: all 300ms ease-out;
}
.entrance-enter-from,
.entrance-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.toast-list {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 200;

    list-style: none;
}

.toast-list li {
    margin-top: 5px;
}
</style>