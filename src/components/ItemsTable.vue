<script>
import { getItemsInCart } from "../functions/CartStorageManagment.js";

export default {
    data() {
        return {
            cartItems: null
        }
    },
    mounted() {
        this.cartItems = getItemsInCart();
    },
    computed: {
        getTotal() {
            let total = 0;
            if(this.cartItems){
                this.cartItems.map(item => {
                    total = total + item.qty * item.price;
                })
            }
            return total;
        }
    },
    methods: {
        updateItemQty(e, item){
            console.log(e)
        }
    }
}
</script>

<template>
    <table class="cart-table">
        <thead>
            <td>
                <tr class="item">Producto</tr>
                <tr class="price">Precio</tr>
                <tr class="qty">Cantidad</tr>
                <tr class="subtotal">Subtotal</tr>
            </td>
        </thead>
        <tbody v-if="cartItems">
            <td v-for="item in cartItems" :key="item.id">
                <tr class="item">
                    <img :src="item.images[0]" alt="">
                    {{ item.title }}
                </tr>
                <tr class="price">${{ item.price }}</tr>
                <tr class="qty">
                    <button class="button btn-primary" id="decrease" @click="updateItemQty(item)">-</button>
                    {{ item.qty }}
                    <button class="button btn-primary" id="increase" @click="updateItemQty(item)">+</button>
                </tr>
                <tr class="subtotal">${{ item.qty * item.price }}</tr>
            </td>
        </tbody>
        <h3 v-else>There's no items in shpping cart</h3>
    </table>
    <h3 class="cart-total">Total: <span >${{ getTotal }}</span> </h3>
</template>

<style>
.cart-table {
    width: 100%;
    border-spacing: 0px;
}

.cart-table thead {
    background-color: #0003;
}

.cart-table thead tr {
    font-weight: 600;
}

.cart-table tbody td:not(:last-child) {
    border-bottom: 1px solid #0004;
}

.cart-table td {
    display: flex;
    flex-direction: row;
    padding: 0;

    width: 100%;
}

.cart-table tr {
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.cart-table tr:not(tbody .item) {
    justify-content: center;
}

.cart-table .item {
    width: 50%;
}

.cart-table .item img {
    width: 30%;
    max-width: 100px;
    border-radius: 5px;
}

.cart-table .price {
    width: 15%;
}

.cart-table .qty {
    width: 20%;
}

.cart-table .subtotal {
    width: 15%;
}

.cart-total {
    text-align: right;
    padding: 0px 20px;
}

.cart-total span {
    font-size: larger;
    font-weight: 600;
}
</style>