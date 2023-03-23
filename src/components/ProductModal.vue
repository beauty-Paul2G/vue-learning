<script>
export default {
    props: {
        product: Object,
        toggleModal: Function
    }
}
</script>

<template>
    <div class="modal-container">
        <div class="modal">
            <img :src="product.images[0]">
            <h2>{{ product.title }}</h2>
            <h3>${{ product.price }}</h3>
            <p>{{ product.description }}</p>
            <div class="buttons">
                <button class="button btn-secondary" @click="toggleModal">Cancelar</button>
                <button class="button btn-primary" >
                    <i class="bi-cart4"></i>
                    Agregar</button>
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
    padding: 30px;
    width: 300px;
    max-width: 100%;
    border: 1px solid #0002;
    border-radius: 5px;
}

.buttons{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 5px;
    margin-top: 20px;
}

.button{
    cursor: pointer;
    padding: 0.5rem;
    transition: all ease 250ms;
    border-radius: 5px;
}

.btn-primary{
    border: 1px solid #00bd7e;
    background-color:  #00bd7e;
    color: white;
}

.btn-primary:hover {
    background-color: #31d8a0;
}

.btn-secondary{
    border: 1px solid #00bd7e;
    background-color:  white;
    color: #00bd7e;
}

.btn-secondary:hover {
    background-color: #e3fdf5;
}

img {
    width: 100%;
    border-radius: 5px;
}
</style>