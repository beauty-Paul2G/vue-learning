<script>
import ItemsTable from "../components/ItemsTable.vue";
import {getItemsInCart} from "../functions/CartStorageManagment.js";

export default {
    components: {
        ItemsTable
    }
}
</script>

<template>
    <main>
        <h1>Shopping cart</h1>
        <div class="cart-products">
            <ItemsTable />
        </div>
    </main>
</template>

<style>
.cart-products {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>