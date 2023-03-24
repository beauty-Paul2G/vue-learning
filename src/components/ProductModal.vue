<script>
import {saveSingleItemToCart, someItemInCart, addQtyToItemInCart} from "../functions/CartStorageManagment.js"

export default {
    data() {
        return {
            product: this.$parent.product,
            qty: 1
        }
    },
    methods: {
        saveToCart() {
            if(!someItemInCart(this.product.id)){
                saveSingleItemToCart(this.product, this.qty);
            } else {
                addQtyToItem(this.product.id, this.qty)
            }
            this.$root.updateCartItemCount();
        }
    }
}
</script>

<template>
    <div class="modal-container">
        <div class="modal">
            <button class="btn-close"  @click="$parent.toggleModal">
                <i class="bi bi-x-lg" style="font-size: 18px;">
                </i></button>
            <img :src="product.images[0]">
            <h2>{{ product.title }}</h2>
            <h3>${{ product.price }}</h3>
            <p>{{ product.description }}</p>
            <div class="buttons">
                <span>Quantity: </span>
                <input type="number" class="spinner" min="1" v-model="qty">
                <button class="button btn-primary" @click="saveToCart">
                    <i class="bi-cart4"></i>
                    Add
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.modal-container {
    width: 100vw;
    height: 100vh;
    background-color: #0003;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 40px 30px;
    width: 400px;
    max-width: 100%;
    border: 1px solid #0002;
    border-radius: 5px;
}

.modal img {
    width: 100%;
    border-radius: 5px;
}

.modal .btn-close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 16px;
    right: 20px;
    z-index: 2;
}

.modal .buttons {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  width: 100%;
  gap: 5px;
  margin-top: 20px;
}

.modal .spinner {
    width: 100px;
}
</style>